// src/components/FigmaRenderer.js

import * as PIXI from 'pixi.js';
import { parseFigmaJson } from '../parser/parser';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { renderFigmaJson } from '../renderer';

// Create a PIXI Application
const app = new PIXI.Application({
  //   width: 1800,
  //   height: 1800,
  backgroundColor: 'red',
  resizeTo: window
});

const FigmaRenderer = ({ figmaJson }) => {
  const [figmaJsonState, setFigmaJson] = React.useState(figmaJson);
  const [isUpdated, setIsUpdated] = React.useState(false);
  // Create a unique ID for the container element
  const elementId = 'figma-canvas-container';

  useEffect(() => {
    // Render the Figma JSON inside the container element
    renderFigmaJson(
      app,
      figmaJsonState,
      elementId,
      e => {
        setIsUpdated(true);
        setFigmaJson(e);
      },
      isUpdated,
      setIsUpdated
    );
  }, [figmaJsonState, isUpdated]);

  return <div id={elementId} />;
};

FigmaRenderer.propTypes = {
  figmaJson: PropTypes.object.isRequired
};

export default FigmaRenderer;
