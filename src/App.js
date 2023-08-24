import React, { useEffect } from "react";
import FigmaRenderer from "./components/FigmaRenderer";
// import sample from "./utils/sample";
import sample from "./utils/bishal-test/6";
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

  useEffect(() => {
    if (!figmaJson) return;
    // Load Epilogue font
    const epilogueFont = new FontFace(
      "Epilogue",
      "url(https://fonts.gstatic.com/s/epilogue/v17/O4ZMFGj5hxF0EhjimngomvnCCtqb30OXMDPSC5_U.woff2)",
      {
        style: "normal",
        weight: "400",
      }
    );

    // Load the font
    epilogueFont
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);
        console.log("Epilogue font loaded successfully");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to load Epilogue font: " + error);
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
          maxWidth: "510px",
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
