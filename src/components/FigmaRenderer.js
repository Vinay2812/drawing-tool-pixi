// src/components/FigmaRenderer.js

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { renderFigmaJson } from "../renderer";

const FigmaRenderer = ({ figmaJson }) => {
  // Create a unique ID for the container element
  const elementId = "figma-canvas-container";

  useEffect(() => {
    // Render the Figma JSON inside the container element
    renderFigmaJson(figmaJson, elementId);
  }, []);

  return <div id={elementId} />;
};

FigmaRenderer.propTypes = {
  figmaJson: PropTypes.object.isRequired,
};

export default FigmaRenderer;
