import { parseFigmaJson } from '../parser/parser';
import { renderFigmaFromParsedJson } from './renderer';
import Matter from 'matter-js';
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
    const container = renderFigmaFromParsedJson(parsedJson.children, app);
    container.name = 'root';
    document.getElementById(elementId).appendChild(app.view);
    app.stage.addChild(container);
  }
  if (canvas && clicked) {
    const engine = Matter.Engine.create();
    const currentElement = document.getElementById('matterJs');
    let render = Matter.Render.create({
      element: currentElement,
      engine: engine,
      options: {
        width: 1870,
        height: 944,
        wireframes: false,
        background: 'transparent'
      }
    });
    const container = app.stage.getChildByName('root');
    // AnimaionRenderer({
    // engine,
    //   app,
    //   type: 'balloon',
    //   other: {
    //     balloonName: 'balloonSprite',
    //     weightName: 'rectangleSprite',
    //     groundName: 'groundSprite',
    //     ballonMass: 1,
    //     weightMass: 1,
    //     ballonForce: { x: 0, y: -0.002 }
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
    // const catapultSprite = findChildByNameDeep(container, '8:136');
    // console.log((catapultSprite.rotation * 180) / Math.PI);
    AnimaionRenderer({
      parentContainer: container,
      engine,
      app,
      type: 'seesaw',
      other: {
        groundName: 'groundSprite',
        weight1Name: '217:190',
        weight2Name: '217:191',
        seesawName: '217:184',
        weight1Mass: 1,
        weight2Mass: 1
      }
    });
    Matter.Runner.run(engine);
    // Matter.Render.run(render);
  }
};
