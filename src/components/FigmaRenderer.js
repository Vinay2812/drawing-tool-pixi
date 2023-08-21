// src/components/FigmaRenderer.js

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as PIXI from 'pixi.js';
import { renderFigmaJson } from '../renderer';
import Matter, { Engine } from 'matter-js';
const app = new PIXI.Application({
  //   width: 1800,
  //   height: 1800,
  // backgroundColor: 'red',
  resizeTo: window
});
// globalThis.__PIXI_APP__ = app;
const engine = Engine.create();

const FigmaRenderer = ({ figmaJson }) => {
  // Create a unique ID for the container element
  const elementId = 'figma-canvas-container';
  const [clicked, setClicked] = useState('');

  useEffect(() => {
    // Render the Figma JSON inside the container element
    renderFigmaJson(app, figmaJson, elementId, { clicked, engine });
  }, [clicked]);

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
