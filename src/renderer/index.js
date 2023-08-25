// src/renderer/index.js

import * as PIXI from "pixi.js";
import { parseFigmaJson } from "../parser/parser";
import { renderFigmaFromParsedJson } from "./renderer";


export const getImageUrls = (obj) => {
    let hashes = [];
  
    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        hashes = hashes.concat(getImageUrls(item));
      });
    } else if (obj && typeof obj === "object") {
      if (obj.imageRef) {
        const imageRef = obj.imageRef;
        if (imageRef) {
          hashes.push(imageRef);
        }
      }
      for (const key in obj) {
        hashes = hashes.concat(getImageUrls(obj[key]));
      }
    }
  
    return hashes;
  };

// Function to render the Figma JSON using PIXI.js
export const renderFigmaJson = (figmaJson, elementId) => {

    const imageUrls = getImageUrls(figmaJson);
    console.log("🚀 ~ file: index.js:34 ~ renderFigmaJson ~ imageUrls:", imageUrls)
  // Check if canvas already exists
  const currentElement = document.getElementById(elementId);
  const canvas = currentElement?.querySelector("canvas");
  if (!canvas) {
    // Parse the Figma JSON into a PIXI Container
    const parsedJson = parseFigmaJson(figmaJson);

    const screenWidth = window.innerWidth > 400 ? 800 : window.innerWidth *2;
    const screenHeight = window.innerHeight*2;
    const devicePixelRatio = window.devicePixelRatio *2;
    // const devicePixelRatio = 2;

    const scaleWidth = screenWidth / figmaJson?.absoluteBoundingBox?.width;
    const scaleHeight = screenHeight / figmaJson?.absoluteBoundingBox?.height;

    const container = renderFigmaFromParsedJson(parsedJson.children, {
      scaleHeight,
      scaleWidth,
      devicePixelRatio,
    });

    // Create a PIXI Application
    const app = new PIXI.Application({
      // antialias: true,
      resolution: devicePixelRatio,
      background: `#${parsedJson?.children[0]?.fills[0].color || "ffffff"}`,
      antialias: true,
      resizeTo: currentElement,
    //   width: screenWidth/2,
    //     height: screenHeight/2,
    });
    

    // const assets = PIXI.Loader.shared.resources;
    // const loader = PIXI.Loader.shared;
    // loader.add(imageUrls);

    app.renderer.plugins.interaction.autoPreventDefault = false;
    app.renderer.view.style.touchAction = "auto";
    // app.view.width = screenWidth /2;
    // app.view.height = screenHeight /2;
    app.stage.addChild(container);

    // Append the PIXI view to the specified HTML element
    const newCanvas = app.view;
    newCanvas.style.width = screenWidth /2;
    newCanvas.style.height = screenHeight /2;
    document.getElementById(elementId).appendChild(newCanvas);

    // Add the container to the PIXI stage

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
