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
    const container = renderFigmaFromParsedJson(parsedJson.children);

    document.getElementById(elementId).appendChild(app.view);
    const groundSprite = new PIXI.Graphics();
    groundSprite.beginFill(0x650a5a);
    groundSprite.name = 'groundSprite';
    groundSprite.position.set(0, 600);
    groundSprite.drawRect(0, 0, 1200, 10);
    groundSprite.endFill();
    app.stage.addChild(groundSprite);
    const balloonSprite = new PIXI.Graphics();
    balloonSprite.beginFill(0x650a5a);
    balloonSprite.name = 'balloonSprite';
    balloonSprite.position.set(300, 300);
    balloonSprite.drawCircle(0, 0, 30);
    balloonSprite.endFill();
    app.stage.addChild(balloonSprite);
    const rectangleSprite = new PIXI.Graphics();
    rectangleSprite.beginFill(0x650a5a);
    rectangleSprite.name = 'rectangleSprite';
    rectangleSprite.position.set(270, 400);
    rectangleSprite.drawRect(0, 0, 60, 60);
    rectangleSprite.endFill();
    app.stage.addChild(rectangleSprite);
    const rectangleSprite1 = new PIXI.Graphics();
    rectangleSprite1.beginFill(0x650a5a);
    rectangleSprite1.name = 'rectangleSprite1';
    rectangleSprite1.position.set(400, 400);
    rectangleSprite1.drawRect(0, 0, 60, 60);
    rectangleSprite1.endFill();
    app.stage.addChild(rectangleSprite1);

    const catapult = new PIXI.Graphics();
    catapult.beginFill(0x00ff00);
    catapult.name = 'catapult';
    catapult.position.set(600, 520);
    catapult.drawRect(0, 0, 320, 20);
    catapult.endFill();
    app.stage.addChild(catapult);

    const body1 = new PIXI.Graphics();
    body1.beginFill(0xff0000);
    body1.name = 'body1';
    body1.position.set(catapult.position.x + 20, catapult.position.y - 50);
    body1.drawRect(0, 0, 40, 40);
    body1.endFill();
    app.stage.addChild(body1);

    const body2 = new PIXI.Graphics();
    body2.beginFill(0x0f4020);
    body2.name = 'body2';
    body2.position.set(catapult.position.x + 80, catapult.position.y - 50);
    body2.drawRect(0, 0, 40, 40);
    body2.endFill();
    app.stage.addChild(body2);

    const body3 = new PIXI.Graphics();
    body3.beginFill(0xff0000);
    body3.name = 'body3';
    body3.position.set(catapult.position.x + catapult.width - 80 - 40, catapult.position.y - 50);
    body3.drawRect(0, 0, 40, 40);
    body3.endFill();
    app.stage.addChild(body3);

    const body4 = new PIXI.Graphics();
    body4.beginFill(0x0f4020);
    body4.name = 'body4';
    body4.position.set(catapult.position.x + catapult.width - 20 - 40, catapult.position.y - 50);
    body4.drawRect(0, 0, 40, 40);
    body4.endFill();
    app.stage.addChild(body4);

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
    // AnimaionRenderer({
    //   engine,
    //   app,
    //   type: 'seesaw',
    //   other: {
    //     groundName: 'groundSprite',
    //     weight1Names: ['body1', 'body2'],
    //     weight2Names: ['body4', 'body3'],
    //     seesawName: 'catapult',
    //     weight1Mass: 1,
    //     weight2Mass: 1
    //   }
    // });
    Matter.Runner.run(engine);
    Matter.Render.run(render);
  }
  if (canvas && clicked) {
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
    // AnimaionRenderer({
    // engine,
    //   app,
    //   type: 'seesaw',
    //   other: {
    //     groundName: 'groundSprite',
    //     weight1Name: 'body1',
    //     weight2Name: 'body2',
    //     seesawName: 'catapult',
    //     weight1Mass: 1,
    //     weight2Mass: 1
    //   }
    // });
  }
};
