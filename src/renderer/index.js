// src/renderer/index.js
import * as PIXI from "pixi.js";
import { parseFigmaJson } from "../parser/parser";
import { renderFigmaFromParsedJson } from "./renderer";
import Matter, { Bodies, Engine, World } from "matter-js";
import AnimaionRenderer from "../components/AnimationRenderer";
import get from "lodash/get";

export const getImageUrls = (obj) => {
  let hashes = [];

  if (Array.isArray(obj)) {
    obj.forEach((item) => {
      hashes = hashes.concat(getImageUrls(item));
    });
  } else if (obj && typeof obj === "object") {
    if (
      obj.imageRef
      //  || obj.gifRef
    ) {
      const asset = obj.imageRef; // || obj.gifRef;
      if (asset) {
        hashes.push(asset);
      }
    }
    for (const key in obj) {
      hashes = hashes.concat(getImageUrls(obj[key]));
    }
  }

  return hashes;
};

// Create a PIXI Application
const app = new PIXI.Application({
  // antialias: true,
  // resolution: window?.devicePixelRatio * 2 ?? devicePixelRatio,
  // background: `#${parsedJson?.children[0]?.fills[0].color || 'ffffff'}`,
  antialias: true,
  // resizeTo: currentElement
  //   width: screenWidth/2,
  //     height: screenHeight/2,
});

// eslint-disable-next-line no-undef
globalThis.__PIXI_APP__ = app;

app.stage.eventMode = "static";
app.stage.hitArea = app.screen;

// Function to render the Figma JSON using PIXI.js

const resolutionFactor = 2;
export const renderFigmaJson = (
  { figmaJsonState: figmaJson, figmaJson: orgFigmaJson },
  elementId,
  setFigmaJson,
  isUpdated,
  setIsUpdated,
  props
) => {
  const { clicked, animationType, setAnimationType } = props;

  const imageUrls = getImageUrls(orgFigmaJson);

  PIXI.Assets.load(imageUrls).then(() => {
    // Check if canvas already exists
    const currentElement = document.getElementById(elementId);
    const canvas = currentElement?.querySelector("canvas");

    const screenWidth =
      window.innerWidth > 400
        ? 400 * resolutionFactor
        : window.innerWidth * resolutionFactor;
    const screenHeight = window.innerHeight * resolutionFactor;
    const devicePixelRatio = window.devicePixelRatio * resolutionFactor;
    // const devicePixelRatio = 2;

    const scaleWidth = screenWidth / orgFigmaJson?.absoluteBoundingBox?.width;
    const scaleHeight =
      screenHeight / orgFigmaJson?.absoluteBoundingBox?.height;
    const rest = { animationType, setAnimationType };

    // Parse the Figma JSON into a PIXI Container
    const parsedJson = !figmaJson?.isParsed
      ? parseFigmaJson(figmaJson)
      : figmaJson;

    if (!canvas) {
      const container = renderFigmaFromParsedJson(
        app,
        parsedJson,
        setFigmaJson,
        {
          scaleHeight,
          scaleWidth,
          devicePixelRatio,
        },
        { ...rest, variables: figmaJson.variables, canvasContainerId: elementId }
      );

      app.renderer.background.color = `#${(parsedJson?.children &&
          parsedJson?.children[0]?.fills &&
          parsedJson?.children[0]?.fills[0]?.color) ||
        "ffffff"
        }`;

      app.renderer.resizeTo = currentElement;
      app.renderer.resolution = devicePixelRatio;

      app.renderer.plugins.interaction.autoPreventDefault = false;
      app.renderer.view.style.touchAction = "auto";

      // Append the PIXI view to the specified HTML element
      app.stage.addChild(container);

      // Append the PIXI view to the specified HTML element
      const newCanvas = app.view;
      newCanvas.style.width = screenWidth / resolutionFactor;
      newCanvas.style.height = screenHeight / resolutionFactor;
      document.getElementById(elementId).appendChild(newCanvas);

      app.renderer.resize(
        (scaleWidth * figmaJson?.absoluteRenderBounds?.width) /
        devicePixelRatio,
        (scaleWidth * figmaJson?.absoluteRenderBounds?.height) /
        devicePixelRatio
      );
    }

    if (canvas && (clicked || animationType)) {
      const engine = Matter.Engine.create();
      const currentElement = document.getElementById("matterJs");
      const screenWidth = window.innerWidth > 400 ? 400 : window.innerWidth;
      const scaleWidth = screenWidth / figmaJson?.absoluteBoundingBox?.width;
      let render = Matter.Render.create({
        element: currentElement,
        engine: engine,
        options: {
          width: canvas.width,
          height: canvas.height,
          wireframes: false,
          background: "transparent",
          pixelRatio: "auto",
        },
      });
      const canvas1 = currentElement?.querySelector("canvas");
      canvas1.style.zoom = scaleWidth;
      const container = app.stage.getChildByName("root");

      switch (animationType) {
        case "seesaw":
          const seeSawLeft = get(figmaJson, ["children", 0, "children"]).filter(
            (i) => i.properties?.type === "seeSawLeft"
          );
          const seeSawRight = get(figmaJson, [
            "children",
            0,
            "children",
          ]).filter((i) => i.properties?.type === "seeSawRight");
          const seeSawLine = get(figmaJson, ["children", 0, "children"]).filter(
            (i) => i.properties?.type === "seeSawLine"
          );

          if (!seeSawLeft.length || !seeSawRight.length || !seeSawLine.length)
            break;
          const getWeight = (obj) =>
            get(obj, [0, "children"])
              ?.filter((i) => i.visible)
              ?.map((i) => i.properties?.mass)
              .reduce((sum, i) => sum + i, 0);
          const seeSawLeftWeight = getWeight(seeSawLeft);
          const seeSawRightWeight = getWeight(seeSawRight);

          AnimaionRenderer({
            parentContainer: container,
            engine,
            app,
            type: "seesaw",
            other: {
              groundName: "groundSprite",
              weight1Name: get(seeSawLeft, [0, "id"]),
              weight2Name: get(seeSawRight, [0, "id"]),
              seesawName: get(seeSawLine, [0, "id"]),
              weight1Mass: seeSawLeftWeight,
              weight2Mass: seeSawRightWeight,
            },
            onCompleted: () => {
              console.log("called");
            },
          });
          break;

        case "balloon":
          // const loonFrames = get(figmaJson, ['children', 0, 'children'])?.filter(i => i.properties?.type === 'loonFrame');

          // loonFrames.forEach(lf => {
          //   const loonMass = lf.children
          //     .filter(i => i.properties?.type === 'loon' && i.visible)
          //     .map(i => i.properties?.mass)
          //     .reduce((sum, i) => sum + i, 0);
          //   const duckMass = lf.children
          //     .filter(i => i.properties?.type === 'duck' && i.visible)
          //     .map(i => i.properties?.mass)
          //     .reduce((sum, i) => sum + i, 0);
          AnimaionRenderer({
            figmaJson: figmaJson.children,
            parentContainer: container,
            engine,
            app,
            type: "balloon",
            // other: {
            //   balloonName: lf.id,
            //   ballonMass: loonMass,
            //   weightMass: duckMass
            // }
          });
          // });
          break;
        default:
      }

      Matter.Runner.run(engine);
      // Matter.Render.run(render);
    }

    if (canvas && isUpdated) {
      if (app.stage.children.length)
        app.stage.removeChild(app.stage.children[0]);

      const container = renderFigmaFromParsedJson(
        app,
        parsedJson,
        setFigmaJson,
        {
          scaleHeight,
          scaleWidth,
          devicePixelRatio,
        },
        { ...rest, variables: figmaJson.variables, canvasContainerId: elementId }
      );

      app.renderer.plugins.interaction.autoPreventDefault = false;
      app.renderer.view.style.touchAction = "auto";

      // Add the container to the PIXI stage
      container.name = "root";
      app.stage.addChild(container);

      // Append the PIXI view to the specified HTML element
      const newCanvas = app.view;
      newCanvas.style.width = screenWidth / resolutionFactor;
      newCanvas.style.height = screenHeight / resolutionFactor;
      document.getElementById(elementId).appendChild(newCanvas);

      // Add the container to the PIXI stage

      app.renderer.resize(
        (scaleWidth * orgFigmaJson?.absoluteRenderBounds?.width) /
        devicePixelRatio,
        (scaleWidth * orgFigmaJson?.absoluteRenderBounds?.height) /
        devicePixelRatio
      );

      setIsUpdated(false);
    }
  });
};
