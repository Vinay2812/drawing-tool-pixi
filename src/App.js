import React, { useEffect } from "react";
import FigmaRenderer from "./components/FigmaRenderer";
// import sample from "./utils/sample";
import sample from "./utils/bishal-test/8";
import useGraphqlCall from "./api/useGraphqlCall";

const App = () => {
  // Assume figmaJson is the JSON data from Figma
  // const figmaJson = sample;
  const [loading, setLoading] = React.useState(true);
  const [figmaContextId, setFigmaContextId] = React.useState(null);
  const [figmaJson, setFigmaJson] = React.useState(null);

  useEffect(() => {
    // First url path is the figma context id
    let figmaContextId = window.location.pathname.split("/")[1];
    // URL decode the figma context id
    figmaContextId = decodeURIComponent(figmaContextId);

    if (!figmaContextId) setFigmaJson(sample);
    else setFigmaContextId(figmaContextId);
  }, []);

  const { data } = useGraphqlCall(figmaContextId);
  console.log("🚀 ~ file: App.js:20 ~ App ~ data:", data);
  useEffect(() => {
    if (!data) return;
    if (data?.other_generic_data?.length === 0) return;
    if (!data?.other_generic_data[0]?.data) return;
    const figmaJson = JSON.parse(data.other_generic_data[0].data);
    setFigmaJson(figmaJson);
  }, [data]);

  const loadFont = async ({ family, source, descriptors }) => {
    // Load font
    const fontData = new FontFace(family, source, descriptors);

    // Load the font
    return fontData
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);
        console.log(`${family} font loaded successfully`);
      })
      .catch((error) => {
        console.log(`Failed to load ${family} font: `, error);
      });
  };
  useEffect(() => {
    if (!figmaJson) return;

    Promise.all([
      loadFont({
        family: "Epilogue",
        source:
          "url(https://fonts.gstatic.com/s/epilogue/v17/O4ZMFGj5hxF0EhjimngomvnCCtqb30OXMDPSC5_U.woff2)",
        descriptors: {
          style: "normal",
          weight: "400",
        },
      }),
      loadFont({
        family: "Manrope",
        source:
          "url(https://fonts.gstatic.com/s/manrope/v14/xn7gYHE41ni1AdIRggexSg.woff2)",
        descriptors: {
          style: "normal",
          weight: "400",
        },
      }),
      loadFont({
        family: "Open Sans",
        source:
          "url(https://fonts.gstatic.com/s/opensans/v35/mem8YaGs126MiZpBA-UFVZ0b.woff2)",
        descriptors: {
          style: "normal",
          weight: "400",
        },
      }),
    ])
      .then(() => {
        console.log("Fonts loaded successfully");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to load font: " + error);
        setLoading(false);
      });
  }, [figmaJson]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "grid",
        placeItems: "center",
        background: "green",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "410px",
          height: "100%",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          overflow: "scroll",
        }}
      >
        {loading ? "Loading ..." : <FigmaRenderer figmaJson={figmaJson} />}
      </div>
    </div>
  );
};

export default App;
