const axios = require("axios");
// const jsdata = require("./notes/data.json");

// CONSTANTS
// FIGMA
const ACCESS_TOKEN = "figd_-_6JwkotWF5Nq1wmMmVRJVxSeHHGKJvP2bVSGwdO";
const FILE_KEY = "m84ERFoN2nxoEqrNCfotoi";

// S3
const BUCKET_NAME = "sets-gamify-assets";
const FILE_PATH = "dev/figma/assets/";
const S3_PRESIGN_URL =
  "https://qjbn7p56fd.execute-api.ap-south-1.amazonaws.com/production/generate";

// JSON DATA
const jsonData = {};

const fetchAssetsUrls = async (figmaFileKey) => {
  const response = await axios
    .get(`https://api.figma.com/v1/files/${figmaFileKey}/images`, {
      headers: {
        "X-FIGMA-TOKEN": ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
    })
    .catch((err) => {
      console.log(err);
    });

  return response?.data?.meta?.images;
};

const getPresignedURL = async (filename) => {
  const bucket_name = BUCKET_NAME;
  const url = S3_PRESIGN_URL;

  const response = await axios
    .post(
      url,
      {
        bucket_name: bucket_name,
        key: FILE_PATH + filename,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .catch((err) => {
      console.log(err);
    });

  return response?.data;
};

const CDN_URL = `https://cdn.homeworkapp.ai/${BUCKET_NAME}`;
const BUCKET_URL = `https://${BUCKET_NAME}.s3.ap-south-1.amazonaws.com`;
const replaceUrl = (url) => {
  return url.replace(CDN_URL, BUCKET_URL);
};

const uploadToS3 = async (imageMap) => {
  const updatedImageMap = {};

  const imgKeys = imageMap ? Object.keys(imageMap) : [];

  if (imgKeys.length > 0) {
    // Create an array of promises for concurrent uploads
    const uploadPromises = imgKeys.map(async (element, i) => {
      const filename = element;

      try {
        const response = await axios({
          method: "GET",
          url: imageMap[element],
          responseType: "arraybuffer",
        });

        const contentType = response.headers["content-type"];

        const { url, bucket_url } = await getPresignedURL(filename);

        const fileContent = response.data;

        const uploadResponse = await axios.put(url, fileContent, {
          headers: {
            "Content-Type": contentType, // Set the content type appropriately
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
          },
        });

        if (uploadResponse.status === 200) {
          const uploadedImageUrl = replaceUrl(bucket_url);
          console.log("File uploaded successfully: ", uploadedImageUrl, i);
          updatedImageMap[element] = {
            type: contentType,
            url: uploadedImageUrl,
          };
        } else {
          console.log(
            "Failed to upload file to S3 using presigned URL:",
            uploadResponse.data
          );
        }
      } catch (error) {
        console.log("Error:", error);
      }
    });

    // Wait for all promises to complete
    await Promise.all(uploadPromises);
  }

  return updatedImageMap;
};

const replaceImageHashes = (obj, imageData) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => replaceImageHashes(item, imageData));
  } else if (obj && typeof obj === "object") {
    if (obj.imageHash) {
      const imageHash = obj.imageHash;
      if (imageData[imageHash]) {
        if (imageData[imageHash]?.type === "image/gif")
          obj.gifRef = imageData[imageHash].url;
        else obj.imageRef = imageData[imageHash].url;
      }
    }
    for (const key in obj) {
      obj[key] = replaceImageHashes(obj[key], imageData);
    }
  }
  return obj;
};

const updateFigmaJson = async (jsonData, figmaFileKey) => {
  const imageMap = await fetchAssetsUrls(figmaFileKey);
  const updatedImageMap = await uploadToS3(imageMap);
  console.log("Uploaded Files: ", updatedImageMap);

  const updatedJson = replaceImageHashes(jsonData, updatedImageMap);

  console.log("Updated Json: ", updatedJson);
  return updatedJson;
};

updateFigmaJson(jsonData, FILE_KEY);
