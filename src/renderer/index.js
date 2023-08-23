// src/renderer/index.js

import * as PIXI from 'pixi.js';
import { parseFigmaJson } from '../parser/parser';
import { renderFigmaFromParsedJson } from './renderer';
import Matter, { Bodies, Engine, World } from 'matter-js';
import AnimaionRenderer from '../components/AnimationRenderer';

// Function to render the Figma JSON using PIXI.js
export const renderFigmaJson = (app, figmaJson, elementId, props) => {
  const { clicked } = props;
  // Check if canvas already exists
  const currentElement = document.getElementById(elementId);
  const canvas = currentElement?.querySelector('canvas');

  if (!canvas) {
    // Parse the Figma JSON into a PIXI Container
    const parsedJson = parseFigmaJson(figmaJson);
    const screenWidth = window.innerWidth > 400 ? 400 : window.innerWidth;
    const screenHeight = window.innerHeight;

    const scaleWidth = screenWidth / figmaJson?.absoluteBoundingBox?.width;
    const scaleHeight = screenHeight / figmaJson?.absoluteBoundingBox?.height;

    const container = renderFigmaFromParsedJson(parsedJson.children, {
      scaleHeight,
      scaleWidth
    });
    app.renderer.plugins.interaction.autoPreventDefault = false;
    app.renderer.view.style.touchAction = 'auto';
    container.name = 'root';
    document.getElementById(elementId).appendChild(app.view);
    app.stage.addChild(container);

    app.renderer.resize(
      scaleWidth * figmaJson?.absoluteRenderBounds?.width,
      scaleWidth * figmaJson?.absoluteRenderBounds?.height
    );
  }
  if (canvas && clicked) {
    const engine = Matter.Engine.create();
    const currentElement = document.getElementById('matterJs');
    const screenWidth = window.innerWidth > 400 ? 400 : window.innerWidth;
    const scaleWidth = screenWidth / figmaJson?.absoluteBoundingBox?.width;
    let render = Matter.Render.create({
      element: currentElement,
      engine: engine,
      options: {
        width: canvas.width,
        height: canvas.height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: 'auto'
      }
    });
    const canvas1 = currentElement?.querySelector('canvas');
    canvas1.style.zoom = scaleWidth;
    const container = app.stage.getChildByName('root');
    // AnimaionRenderer({
    //   parentContainer: container,
    //   engine,
    //   app,
    //   type: 'balloon',
    //   other: {
    //     balloonName: '244:180',
    //     ballonMass: 1,
    //     weightMass: 1
    //   }
    // });
    // AnimaionRenderer({
    // engine,
    //   app,
    //   type: 'rotate',
    //   other: {
    //     groundName: 'rectangleSprite1',
    //     speed: 0.1
    //   }
    // });
    // AnimaionRenderer({
    //   parentContainer: container,
    //   engine,
    //   app,
    //   type: 'seesaw',
    //   other: {
    //     groundName: 'groundSprite',
    //     weight1Name: '243:150',
    //     weight2Name: '243:153',
    //     seesawName: '217:184',
    //     weight1Mass: 1.1,
    //     weight2Mass: 1
    //   },
    //   onCompleted: () => {
    //     console.log('called');
    //   }
    // });
    Matter.Runner.run(engine);
    // Matter.Render.run(render);
  }
};
