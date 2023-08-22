// src/components/FigmaRenderer.js

import * as PIXI from 'pixi.js';
import { parseFigmaJson } from '../parser/parser';
import PropTypes from 'prop-types';
import { renderFigmaJson } from '../renderer';
import React, { useEffect, useState } from 'react';
import Matter, { Engine } from 'matter-js';

// globalThis.__PIXI_APP__ = app;
const engine = Engine.create();

const FigmaRenderer = ({ figmaJson }) => {
  const [figmaJsonState, setFigmaJson] = React.useState(figmaJson);
  const [isUpdated, setIsUpdated] = React.useState(false);
  const [clicked, setClicked] = useState('');
  // Create a unique ID for the container element
  const elementId = 'figma-canvas-container';

  useEffect(() => {
    // Render the Figma JSON inside the container element
    renderFigmaJson(
      { figmaJsonState, figmaJson },
      elementId,
      e => {
        setIsUpdated(true);
        setFigmaJson(e);
      },
      isUpdated,
      setIsUpdated,
      { clicked, setClicked, engine }
    );
  }, [figmaJsonState, isUpdated, clicked]);

  Matter.Runner.run(engine);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setClicked('up');
          }}
        >
          up
        </button>
        <button
          onClick={() => {
            setClicked('down');
          }}
        >
          down
        </button>
      </div>
      <div id={elementId} />
      <div
        id={'matterJs'}
        style={{
          position: 'absolute',
          marginTop: '37px'
        }}
      />
    </>
  );
};

FigmaRenderer.propTypes = {
  figmaJson: PropTypes.object.isRequired
};

export default FigmaRenderer;
