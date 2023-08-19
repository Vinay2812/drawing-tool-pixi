const axios = require("axios");

// CONSTANTS
// FIGMA
const ACCESS_TOKEN = "figd_icnuQc-GqAz-jhQ0YBFus9byzWlroQ5al6FGBBsr";
const FILE_KEY = "ixE1TVyHYZObrzeNW1wvrD";

// S3
const BUCKET_NAME = "sets-gamify-assets";
const FILE_PATH = "dev/figma/assets/";
const S3_PRESIGN_URL =
  "https://qjbn7p56fd.execute-api.ap-south-1.amazonaws.com/production/generate";

// JSON DATA
const jsonData = {};

const fetchAssetsUrls = async () => {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FILE_KEY}/images`,
    {
      headers: {
        "X-FIGMA-TOKEN": ACCESS_TOKEN,
      },
    }
  );

  const data = await response.json();

  return data?.meta?.images;
};

const getPresignedURL = async (filename) => {
  const bucket_name = BUCKET_NAME;
  const url = S3_PRESIGN_URL;

  const data = {
    bucket_name: bucket_name,
    key: FILE_PATH + filename,
  };

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  const resObj = await response.json();

  return resObj;
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
          },
        });

        if (uploadResponse.status === 200) {
          const uploadedImageUrl = replaceUrl(bucket_url);
          // console.log("File uploaded successfully: ", uploadedImageUrl, i);
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

const updateFigmaJson = async () => {
  const imageMap = await fetchAssetsUrls();
  const updatedImageMap = await uploadToS3(imageMap);
  console.log("Uploaded Files: ", updatedImageMap);

  const updatedJson = replaceImageHashes(jsonData, updatedImageMap);

  console.log("Updated Json: ", updatedJson);
  return updatedJson;
};

updateFigmaJson();
