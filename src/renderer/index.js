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

    const scaleWidth = screenWidth / figmaJson?.absoluteBoundingBox?.width;
    const scaleHeight = screenHeight / figmaJson?.absoluteBoundingBox?.height;

    const container = renderFigmaFromParsedJson(parsedJson.children, {
      scaleHeight,
      scaleWidth,
    });

    // Create a PIXI Application
    const app = new PIXI.Application({
      //   antialias: true,
      //   resolution: window.devicePixelRatio*3,
      background: `#${parsedJson?.children[0]?.fills[0].color || "ffffff"}`,
    });

    app.renderer.plugins.interaction.autoPreventDefault = false;
    app.renderer.view.style.touchAction = "auto";

    // Append the PIXI view to the specified HTML element
    document.getElementById(elementId).appendChild(app.view);

    // Add the container to the PIXI stage
    app.stage.addChild(container);

    app.renderer.resize(
      scaleWidth * figmaJson?.absoluteRenderBounds?.width,
      scaleWidth * figmaJson?.absoluteRenderBounds?.height
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
