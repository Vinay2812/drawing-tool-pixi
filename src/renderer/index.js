// src/renderer/index.js
import * as PIXI from 'pixi.js';
import { parseFigmaJson } from '../parser/parser';
import { renderFigmaFromParsedJson } from './renderer';
import Matter, { Bodies, Engine, World } from 'matter-js';
import AnimaionRenderer from '../components/AnimationRenderer';

// Create a PIXI Application
export const app = new PIXI.Application({
  //   width: 1800,
  //   height: 1800,
  backgroundColor: 'red',
  resizeTo: window
});

// eslint-disable-next-line no-undef
globalThis.__PIXI_APP__ = app;

app.stage.eventMode = 'static';
app.stage.hitArea = app.screen;

// Function to render the Figma JSON using PIXI.js
export const renderFigmaJson = (
  { figmaJsonState: figmaJson, figmaJson: orgFigmaJson },
  elementId,
  setFigmaJson,
  isUpdated,
  setIsUpdated,
  props
) => {
  const { clicked, setClicked } = props;
  // Check if canvas already exists
  const currentElement = document.getElementById(elementId);
  const canvas = currentElement?.querySelector('canvas');

  const screenWidth = window.innerWidth > 400 ? 400 : window.innerWidth;
  const screenHeight = window.innerHeight;

  const scaleWidth = screenWidth / orgFigmaJson?.absoluteBoundingBox?.width;
  const scaleHeight = screenHeight / orgFigmaJson?.absoluteBoundingBox?.height;
  const rest = { setClicked };

  if (!canvas) {
    // Parse the Figma JSON into a PIXI Container
    const parsedJson = !figmaJson.variables ? parseFigmaJson(figmaJson) : figmaJson;

    const container = renderFigmaFromParsedJson(
      app,
      parsedJson,
      setFigmaJson,
      {
        scaleHeight,
        scaleWidth
      },
      rest
    );

    app.renderer.plugins.interaction.autoPreventDefault = false;
    app.renderer.view.style.touchAction = 'auto';

    // Append the PIXI view to the specified HTML element
    container.name = 'root';
    document.getElementById(elementId).appendChild(app.view);
    app.stage.addChild(container);

    app.renderer.resize(
      scaleWidth * orgFigmaJson?.absoluteRenderBounds?.width,
      scaleWidth * orgFigmaJson?.absoluteRenderBounds?.height
    );
  }
  if (canvas && clicked) {
    const engine = Matter.Engine.create();
    const currentElement = document.getElementById('matterJs');
    let render = Matter.Render.create({
      element: currentElement,
      engine: engine,
      options: {
        width: canvas.width,
        height: canvas.height,
        wireframes: false,
        background: 'transparent'
      }
    });
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

  if (canvas && isUpdated) {
    if (app.stage.children.length) app.stage.removeChild(app.stage.children[0]);

    const parsedJson = figmaJson;
    const container = renderFigmaFromParsedJson(
      app,
      parsedJson,
      setFigmaJson,
      {
        scaleHeight,
        scaleWidth
      },
      rest
    );

    app.renderer.plugins.interaction.autoPreventDefault = false;
    app.renderer.view.style.touchAction = 'auto';

    // Add the container to the PIXI stage
    container.name = 'root';
    app.stage.addChild(container);

    app.renderer.resize(
      scaleWidth * orgFigmaJson?.absoluteRenderBounds?.width,
      scaleWidth * orgFigmaJson?.absoluteRenderBounds?.height
    );

    setIsUpdated(false);
  }
};
