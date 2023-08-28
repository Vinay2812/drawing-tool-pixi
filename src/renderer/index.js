// src/renderer/index.js

import * as PIXI from "pixi.js";
import { parseFigmaJson } from "../parser/parser";
import { renderFigmaFromParsedJson } from "./renderer";

// Function to render the Figma JSON using PIXI.js
export const renderFigmaJson = (figmaJson, elementId) => {
  // Check if canvas already exists
  const currentElement = document.getElementById(elementId);
  const canvas = currentElement?.querySelector("canvas");
  if (!canvas) {
    // Parse the Figma JSON into a PIXI Container
    const parsedJson = parseFigmaJson(figmaJson);

    const screenWidth = window.innerWidth > 400 ? 400 : window.innerWidth;
    const screenHeight = window.innerHeight;
    const devicePixelRatio = window.devicePixelRatio;

    const scaleWidth = screenWidth / figmaJson?.absoluteBoundingBox?.width;
    const scaleHeight = screenHeight / figmaJson?.absoluteBoundingBox?.height;

    // Create a PIXI Application
    const app = new PIXI.Application({
      resolution: window.devicePixelRatio ?? 1,
      background: `#${parsedJson?.children[0]?.fills[0].color || "ffffff"}`,
      // autoDensity: true,
      antialias: true,
    });
    app.renderer.events.autoPreventDefault = false;
    app.renderer.view.style.touchAction = "auto";
    const container = renderFigmaFromParsedJson(parsedJson.children, {
      scaleHeight,
      scaleWidth,
      devicePixelRatio,
      app,
      canvasContainerId: elementId,
    });
    container.interactive = true;

    // Append the PIXI view to the specified HTML element
    document.getElementById(elementId).appendChild(app.view);

    // Add the container to the PIXI stage
    app.stage.addChild(container);
    app.renderer.render(app.stage);

    app.renderer.resize(
      (scaleWidth * figmaJson?.absoluteRenderBounds?.width) / devicePixelRatio,
      (scaleWidth * figmaJson?.absoluteRenderBounds?.height) / devicePixelRatio
    );

    // app.stage.y = container.height / container.resolution
    // app.stage.x = minX;
    // // app.stage.scale.x = -1;
    // app.stage.y = minY;
    // app.stage.scale.y = -1;
    // console.log("🚀 ~ file: index.js:50 ~ renderFigmaJson ~ app:", app);
    // app.x = -minX;
    // app.y = -minY;
    // const debugGraphics = new PIXI.Graphics();
    // debugGraphics.lineStyle(2, 0x00ff00);
    // debugGraphics.drawRect(0, 0, 800, 600);
    // container.addChild(debugGraphics);
    // Optionally, you can add code here to set up interactivity, animations, etc.
  }
};
