// src/renderer/index.js
import * as PIXI from 'pixi.js';
import { parseFigmaJson } from '../parser/parser';
import { renderFigmaFromParsedJson } from './renderer';
import Matter, { Bodies, Engine, World } from 'matter-js';
import AnimaionRenderer from '../components/AnimationRenderer';
import get from 'lodash/get';

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
  const { clicked, animationType, setAnimationType } = props;
  // Check if canvas already exists
  const currentElement = document.getElementById(elementId);
  const canvas = currentElement?.querySelector('canvas');

  const screenWidth = window.innerWidth > 400 ? 400 : window.innerWidth;
  const screenHeight = window.innerHeight;

  const scaleWidth = screenWidth / orgFigmaJson?.absoluteBoundingBox?.width;
  const scaleHeight = screenHeight / orgFigmaJson?.absoluteBoundingBox?.height;
  const rest = { animationType, setAnimationType };

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

  if (canvas && (clicked || animationType)) {
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

    switch (animationType) {
      case 'seesaw':
        const seeSawLeft = get(figmaJson, ['children', 0, 'children']).filter(i => i.properties?.type === 'seeSawLeft');
        const seeSawRight = get(figmaJson, ['children', 0, 'children']).filter(i => i.properties?.type === 'seeSawRight');
        const seeSawLine = get(figmaJson, ['children', 0, 'children']).filter(i => i.properties?.type === 'seeSawLine');

        if (!seeSawLeft.length || !seeSawRight.length || !seeSawLine.length) break;
        const getWeight = obj =>
          get(obj, [0, 'children'])
            ?.filter(i => i.visible)
            ?.map(i => i.properties?.mass)
            .reduce((sum, i) => sum + i, 0);
        const seeSawLeftWeight = getWeight(seeSawLeft);
        const seeSawRightWeight = getWeight(seeSawRight);

        AnimaionRenderer({
          parentContainer: container,
          engine,
          app,
          type: 'seesaw',
          other: {
            groundName: 'groundSprite',
            weight1Name: get(seeSawLeft, [0, 'id']),
            weight2Name: get(seeSawRight, [0, 'id']),
            seesawName: get(seeSawLine, [0, 'id']),
            weight1Mass: seeSawLeftWeight,
            weight2Mass: seeSawRightWeight
          },
          onCompleted: () => {
            console.log('called');
          }
        });
        break;

      case 'balloon':
        const loonFrames = get(figmaJson, ['children', 0, 'children'])?.filter(i => i.properties?.type === 'loonFrame');

        loonFrames.forEach(lf => {
          const loonMass = lf.children
            .filter(i => i.properties?.type === 'loon' && i.visible)
            .map(i => i.properties?.mass)
            .reduce((sum, i) => sum + i, 0);
          const duckMass = lf.children
            .filter(i => i.properties?.type === 'duck' && i.visible)
            .map(i => i.properties?.mass)
            .reduce((sum, i) => sum + i, 0);
          AnimaionRenderer({
            parentContainer: container,
            engine,
            app,
            type: 'balloon',
            other: {
              balloonName: lf.id,
              ballonMass: loonMass,
              weightMass: duckMass
            }
          });
        });
        break;
      default:
    }

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
