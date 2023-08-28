// src/components/FigmaRenderer.js

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { renderFigmaJson } from "../renderer";
import { useDrawingTools } from "../drawing-tool/state";

const FigmaRenderer = ({ figmaJson }) => {
  // Create a unique ID for the container element
  const elementId = "figma-canvas-container";
  const drawingTools = useDrawingTools();

  // const {
  //   activeTool,
  //   drawingItems,
  //   undoItems,
  // } = getDrawingTools();
  const { activeTool, drawingItems } = drawingTools;
  useEffect(() => {
    // Render the Figma JSON inside the container element
    renderFigmaJson(figmaJson, elementId, drawingTools, useDrawingTools);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTool, drawingItems]);

  return <div id={elementId} />;
};

FigmaRenderer.propTypes = {
  figmaJson: PropTypes.object.isRequired,
};

export default FigmaRenderer;
