// src/components/FigmaRenderer.js

import * as PIXI from 'pixi.js';
import { parseFigmaJson } from '../parser/parser';
import set from 'lodash/set';
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
  const [animationType, setAnimationType] = useState(null);
  // Create a unique ID for the container element
  const elementId = 'figma-canvas-container';

  useEffect(() => {
    // Render the Figma JSON inside the container element
    renderFigmaJson(
      { figmaJsonState, figmaJson },
      elementId,
      e => {
        set(e, 'isParsed', true);
        setIsUpdated(true);
        setFigmaJson(e);
      },
      isUpdated,
      setIsUpdated,
      { clicked, engine, animationType, setAnimationType }
    );
  }, [figmaJsonState, isUpdated, clicked, animationType]);

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
      <div
        style={{
          position: 'relative'
        }}
      >
        <div id={elementId} />
        <div
          id={'matterJs'}
          style={{
            top: 0,
            position: 'absolute'
          }}
        />
      </div>
    </>
  );
};

FigmaRenderer.propTypes = {
  figmaJson: PropTypes.object.isRequired
};

export default FigmaRenderer;
