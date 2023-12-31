import * as PIXI from "pixi.js";
import get from "lodash/get";
import set from "lodash/set";
// import { getFilter } from "../utils/pixiJS";
import { AnimatedGIF } from "@pixi/gif";
import { DropShadowFilter } from "@pixi/filter-drop-shadow";
import { FXAAFilter } from "@pixi/filter-fxaa";
import "@pixi/gif";

import "@pixi/graphics-extras";
import { drawSVGPath, fillSVGPath, parseColor } from "../utils/layout";
import TextInput from "./PIXI.TextInput";
import { debounce } from "lodash";
import { DrawingTool } from "../drawing-tool";
import { attachInteraction } from "./interaction";

let dragTarget = null;
let dragData = null;
const dropAreas = [];
const GAP = 2;
export const renderFigmaFromParsedJson = (
  app,
  parsedJson,
  setFigmaJson,
  { scaleHeight, scaleWidth, devicePixelRatio },
  rest
) => {
  const children = parsedJson.children;
  const container = new PIXI.Container();
  container.sortableChildren = true;
  const screenWidth = children[0].absoluteBoundingBox.width;
  const screenHeight = children[0].absoluteBoundingBox.height;
  // children.forEach((child, idx) => {
  //   renderChild(
  //     child,
  //     container,
  //     screenWidth,
  //     screenHeight,
  //     parsedJson,
  //     ["children", idx],
  //     setFigmaJson,
  //     app,
  //     {
  //       scaleHeight,
  //       scaleWidth,
  //       devicePixelRatio,
  //     },
  //     rest
  //   );
  // });
  const child = {
    modifiers: [{
      type: "DRAWING_TOOL",
      canvasWidth: screenWidth,
      canvasHeight: screenHeight,
      gridSize: 50,
      showSubGrid: true,
      unit: "m",
      hiddenTools: [],
      defaultDrawingItems: [],
    }],
  }

  renderChild(
    child,
    container,
    screenWidth,
    screenHeight,
    parsedJson,
    ["children", 0],
    setFigmaJson,
    app,
    {
      scaleHeight,
      scaleWidth,
      devicePixelRatio,
    },
    rest
  );


  container.backgroundColor = 0xffffff;
  // const pixiChild = new PIXI.Graphics();
  // pixiChild.position.set(128, 56);
  // pixiChild.zIndex = 200;
  // // pixiChild.rotation = 1.5707963267948963;
  // pixiChild.beginFill(0x00cccc);
  // // pixiChild.drawTorus(180, 24, 36, 18, 0, Math.PI * 2);
  // pixiChild.drawRect(0, 0, 44, 22);
  // pixiChild.endFill();
  // container.addChild(pixiChild);

  container.scale.set(scaleWidth / devicePixelRatio);
  return container;
};

const getScaleWidth = (
  { scaleWidth, devicePixelRatio },
  { maxWidth, width, minWidth }
) => {
  let scale = 1;
  if (minWidth && (scaleWidth / devicePixelRatio) * width < minWidth) {
    scale = minWidth / width;
  } else if (maxWidth && (scaleWidth / devicePixelRatio) * width > maxWidth) {
    scale = maxWidth / width;
  }
  return scale;
};

const renderChild = async (
  child,
  parentContainer,
  screenWidth,
  screenHeight,
  originalJson,
  path = [],
  setFigmaJson,
  app,
  scaleInfo,
  rest
) => {
  if (!child) return;

  let pixiObject;
  const parentVariables = rest.variables;
  const childVariables = child.variableLink;
  if (parentVariables?.length && childVariables?.length) {
    const childVariableNames = childVariables.map((i) => i.variableName);
    parentVariables.forEach((variable) => {
      if (childVariableNames.includes(variable.name)) {
        const value =
          variable.value ?? variable.default ?? variable.defaultValue;
        const defaultValue = variable.default ?? variable.defaultValue;
        const childVariable = childVariables.find(
          (i) => i.variableName === variable.name
        );

        switch (childVariable.property) {
          case "y":
            if (value > defaultValue) {
              child.relativeTransform.y = defaultValue;
            } else {
              child.relativeTransform.y = value;
            }

            break;
          case "x":
            if (value > defaultValue) {
              child.relativeTransform.x = defaultValue;
            } else {
              child.relativeTransform.x = variable.value;
            }

            break;
          case "width":
            child.width = value;

            break;
          case "height":
            child.height = value;

            break;
          case "visible":
            set(child, childVariable.property, value > 0);
            break;
          default:
            set(child, childVariable.property, value);
            break;
        }
      }
    });
  }

  if (child.modifiers?.length) {
    const modifiers = child.modifiers;
    for (let modifier of modifiers) {
      const { type } = modifier;

      switch (type) {
        case "AUTO_TILE":
          const children = get(originalJson, [...path, "children"]);
          let childrenHeight = 0;
          let childrenWidth = 0;
          if (children?.length > 0) {
            childrenHeight = children[0].height;
            childrenWidth = children[0].width;
          }
          const totalChildrenY = parseInt(child.height / childrenHeight);
          const totalChildrenX = parseInt(child.width / childrenWidth);
          const newChildren = [];

          for (let i = 0; i < totalChildrenY; i++) {
            for (let j = 0; j < totalChildrenX; j++) {
              const Newchild = {
                ...children[0],
                relativeTransform: {
                  ...children[0].relativeTransform,
                  y: i * childrenHeight + i * GAP,
                  x: j * childrenWidth + j * GAP,
                },
              };
              newChildren.push(Newchild);
            }
          }
          child.children = newChildren;

          break;
        case "DRAWING_TOOL":
          const {
            canvasWidth,
            canvasHeight,
            gridSize,
            showSubGrid,
            unit,
            hiddenTools,
            defaultDrawingItems,
          } = modifier;
          const {
            canvasContainerId
          } = rest;
          const drawingTool = new DrawingTool({
            app,
            canvasWidth,
            canvasHeight,
            canvasContainerId,
            gridSize,
            pixiContainer: parentContainer,
            showSubGrid,
            unit,
            hiddenTools,
            defaultDrawingItems,
          });
          drawingTool.render()
          break;
        default:
          break;
      }
    }
  }

  switch (child.type) {
    case "CANVAS":
      pixiObject = renderCanvas(child);
      break;
    case "FRAME":
    case "GROUP":
    case "RECTANGLE":
    case "POLYGON":
    case "VECTOR":
    case "STAR":
    case "LINE":
    case "INSTANCE":
    case "ELLIPSE":
    case "UNION":
    case "BOOLEAN_OPERATION":
      pixiObject = await renderPolygon(
        child,
        screenWidth,
        screenHeight,
        originalJson,
        path,
        setFigmaJson,
        app,
        rest
      );
      break;
    case "TEXT":
      pixiObject = await renderText(
        child,
        screenWidth,
        screenHeight,
        originalJson,
        path,
        setFigmaJson,
        app,
        rest
      );
      break;
    case "INPUT":
      pixiObject = await renderInput(child);
      break;
    default:
      break;
  }
  if (parentContainer && pixiObject) {
    parentContainer.addChild(pixiObject);
  }
  if (child?.type !== "INPUT" && child.children) {
    child.children.forEach((grandchild, idx) => {
      if (grandchild.type === "TEXT") {
        grandchild.parent = child;
      }
      renderChild(
        grandchild,
        pixiObject,
        screenWidth,
        screenHeight,
        originalJson,
        [...path, "children", idx],
        setFigmaJson,
        app,
        scaleInfo,
        rest
      );
    });
  }
};

const renderCanvas = (child) => {
  const pixiObject = new PIXI.Container();
  pixiObject.zIndex = child.zIndex;
  return pixiObject;
};

const getTextAlignHorizontal = (textAlignHorizontal) => {
  switch (textAlignHorizontal) {
    case "LEFT":
      return "left";
    case "RIGHT":
      return "right";
    case "CENTER":
      return "center";
    case "JUSTIFIED":
      return "justify";
    default:
      return "left";
  }
};

const renderText = async (
  child,
  screenWidth,
  screenHeight,
  originalJson,
  path,
  setFigmaJson,
  app,
  rest
) => {
  if (!child.visible) return;
  const fontNameObj = child.fontName || {};
  const fontFamily = fontNameObj.family || "Arial"; // Default to 'Arial' if fontFamily is not provided
  const fontStyle = fontNameObj.style || "normal"; // Default to 'normal' if fontStyle is not provided
  const fontSize = child.fontSize || 12; // Default to 12 if fontSize is not provided
  const fontWeight = child.fontWeight || "500"; // Default to 'normal' if fontWeight is not provided
  const textAlignHorizontal = getTextAlignHorizontal(child.textAlignHorizontal); // Default to 'left' if textAlignHorizontal is not provided
  const textDecoration = child.textDecoration || "none"; // Default to 'none' if textDecoration is not provided

  const lineHeightObj = child.lineHeight || {};
  let lineHeightValue = lineHeightObj.value || fontSize; // Default to 1.2 times the fontSize if lineHeightValue is not provided
  if (lineHeightObj.unit === "PERCENT") {
    lineHeightValue = (lineHeightValue / 100) * fontSize;
  }

  const letterSpacingObj = child.letterSpacing || {};
  let letterSpacingValue = letterSpacingObj.value || 0; // Default to 0 if letterSpacingValue is not provided
  if (letterSpacingObj.unit === "PERCENT") {
    letterSpacingValue = (letterSpacingValue / 100) * fontSize;
  }

  let wrapperPixiObject = await renderPolygon(
    child,
    screenWidth,
    screenHeight,
    originalJson,
    path,
    setFigmaJson,
    app,
    rest
  );
  // if (child.id === "72:325") {
  // 	wrapperPixiObject.beginFill(0x0000ff);
  // 	wrapperPixiObject.drawRect(
  // 		0,
  // 		0,
  // 		child.absoluteBoundingBox.width,
  // 		child.absoluteBoundingBox.height
  // 	);
  // 	wrapperPixiObject.endFill();
  // }
  // wrapperPixiObject.width = child.absoluteBoundingBox.width;
  // wrapperPixiObject.height = child.absoluteBoundingBox.height;
  const fillColor =
    child?.fills?.length > 0 && child.fills[0].visible && child.fills[0].color;

  const style = new PIXI.TextStyle({
    fontFamily: fontFamily,
    // fontStyle: fontStyle,
    fontSize: fontSize,
    fontWeight: fontWeight,
    align: textAlignHorizontal,
    textDecoration: textDecoration,
    wordWrap: true,
    wordWrapWidth: child?.absoluteBoundingBox?.width,
    lineHeight: lineHeightValue,
    letterSpacing: letterSpacingValue,
    fill: fillColor,
    trim: child.textAlignVertical === "CENTER",
  });

  const pixiObject = new PIXI.Text();
  pixiObject.resolution = 2;
  pixiObject.text = child?.characters?.replace(/\u2028/g, "\n");
  pixiObject.style = style;
  pixiObject.zIndex = child.zIndex;
  if (textAlignHorizontal === "center") {
    pixiObject.pivot.x = pixiObject.width / 2;
    // pixiObject.pivot.y = pixiObject.height/2;
    pixiObject.x = child.absoluteBoundingBox.width / 2;
    // pixiObject.y = child.absoluteBoundingBox.height/2;
  }
  if (child.textAlignVertical === "CENTER") {
    pixiObject.pivot.y = pixiObject.height / 2;
    pixiObject.y = child.absoluteBoundingBox.height / 2;
  }
  wrapperPixiObject.addChild(pixiObject);
  return wrapperPixiObject;
};

const renderInput = async (child) => {
  console.log(child);
  let pixiObject = new PIXI.Graphics();
  pixiObject.zIndex = child.zIndex;

  let fillColor =
    child?.fills?.length > 0 && child.fills[0].visible && child.fills[0].color;

  let strokesColor =
    child?.strokes?.length > 0 &&
    child.strokes[0].visible &&
    child.strokes[0].color;

  const textData = child?.children ? child?.children[0] : {};

  const paddingX = textData?.relativeTransform?.x || 8;
  const paddingY = textData?.relativeTransform?.y || 8;
  const textColor =
    textData?.fills?.length > 0 &&
    textData.fills[0].visible &&
    textData.fills[0].color;

  const fontFamily = textData?.fontName?.family || "Arial"; // Default to 'Arial' if fontFamily is not provided
  const fontSize = textData.fontSize || 12; // Default to 12 if fontSize is not provided
  const fontWeight = textData.fontWeight || "500"; // Default to 'normal' if fontWeight is not provided
  const textAlignHorizontal = textData.textAlignHorizontal || "left"; // Default to 'left' if textAlignHorizontal is not provided
  const textDecoration = textData.textDecoration || "none"; // Default to 'none' if textDecoration is not provided

  const lineHeightObj = textData.lineHeight || {};
  let lineHeightValue = lineHeightObj.value || fontSize * 1.2; // Default to 1.2 times the fontSize if lineHeightValue is not provided
  if (lineHeightObj.unit === "PERCENT") {
    lineHeightValue = (lineHeightValue / 100) * fontSize;
  }

  const letterSpacingObj = textData.letterSpacing || {};
  let letterSpacingValue = letterSpacingObj.value || 0; // Default to 0 if letterSpacingValue is not provided
  if (letterSpacingObj.unit === "PERCENT") {
    letterSpacingValue = (letterSpacingValue / 100) * fontSize;
  }

  const inputField = new TextInput({
    input: {
      fontFamily,
      fontWeight,
      letterSpacing: `${letterSpacingValue}px`,
      textAlign: textAlignHorizontal,
      textDecoration,
      fontSize: `${fontSize}px`,
      padding: `${paddingY}px ${paddingX}px`,
      width: `${child.width - paddingX * 2}px`,
      height: `${child.height - paddingY * 2}px`, // Set a specific height for multiline
      color: "#26272E",
      multiline: child.height - paddingY * 2 >= lineHeightValue * 2,
    },
    box: {
      default: {
        stroke: {
          color: strokesColor || 0xcbcee0,
          width: Number(child?.strokeWeight) || 0,
        },
        ...(fillColor ? { fill: fillColor } : {}),
      },
      focused: {
        ...(fillColor ? { fill: fillColor } : {}),
        stroke: { color: 0xabafc6, width: Number(child?.strokeWeight) || 0 },
      },
      disabled: {
        fill: 0xdbdbdb,
      },
    },
  });

  inputField.placeholderColor = textColor;
  inputField.placeholder = textData?.characters || "Type something...";

  if (child.relativeTransform) {
    let { x, y } = child.relativeTransform;
    inputField.x = x;
    inputField.y = y;
  }

  inputField.on(
    "input",
    debounce((event) => {
      const inputValue = event; // Get the text from the input field

      console.log("Input changed:", child.id, inputValue);
    }, 500)
  );

  const ncontainer = new PIXI.Container();
  ncontainer.addChild(inputField);

  const pxChild = await renderPolygon(child, 0, 0);
  pixiObject.addChild(pxChild);
  pixiObject.addChild(ncontainer);

  return pixiObject;
};

const renderPolygon = async (
  child,
  screenWidth,
  screenHeight,
  originalJson,
  path = [],
  setFigmaJson,
  app,
  rest
) => {
  const { setAnimationType } = rest || {};
  if (!child.visible) return;

  let pixiObject = new PIXI.Graphics();

  // add drag controllers
  let dropConfig = child.dropConfig && child.dropConfig;
  if (child.modifiers?.length) {
    dropConfig = get(
      child.modifiers.filter((i) => i.type === "DROPPABLE"),
      [0]
    );
  }

  if (dropConfig) {
    pixiObject.lineStyle(1, 0x808080, 1, 0.5, true);
  }

  pixiObject.zIndex = child.zIndex;
  // if (child.clipsContent) {
  // 	let mask = new PIXI.Graphics();
  // 	mask.beginFill(0x000000);
  // 	mask = drawShape(child, mask);
  // 	mask.endFill();
  // 	pixiObject.addChild(mask);
  // 	pixiObject.mask = mask;
  // }

  let fillColor =
    child?.fills?.length > 0 &&
    child.fills.filter((f) => f.type === "IMAGE")?.length === 0 &&
    child.fills[0].visible &&
    child.fills[0].color;

  const fillOpacity = child?.fills?.length > 0 && child.fills[0].opacity;

  if (child.type === "TEXT") {
    fillColor = null;
  }
  fillColor
    ? pixiObject.beginFill(fillColor, fillOpacity || 1)
    : pixiObject.beginFill(0xffffcc, 0);
  pixiObject = drawShape(child, pixiObject);
  pixiObject.endFill();
  if (
    child?.fills?.length > 0 &&
    child.fills.filter((f) => f.type === "IMAGE")?.length > 0
  ) {
    child.fills.forEach(async (fill) => {
      let pixiChild = new PIXI.Graphics();
      pixiChild.zIndex = child.zIndex;
      pixiChild.position.set(child.position.x, child.position.y);

      let imageSprite;
      if (fill.type === "SOLID") {
        if (fill.visible)
          pixiChild.beginFill(
            String(fill?.color).length === 6 ? `0x${fill?.color}` : fill?.color
          );
      } else if (fill.type === "IMAGE" && (fill.gifRef || fill.imageRef)) {
        const gifRef = fill.gifRef;
        const imageUrl = fill.imageRef;

        const cacheAsset = PIXI.Assets.get(imageUrl || gifRef);
        if (gifRef) {
          if (cacheAsset) imageSprite = pixiChild.addChild(cacheAsset);
          else {
            imageSprite = await PIXI.Assets.load(gifRef).then((image) =>
              pixiChild.addChild(image)
            );
          }
        } else {
          const imageTexture = cacheAsset || PIXI.Texture.from(imageUrl); // Load the texture
          // imageTexture.resolution = window.devicePixelRatio;

          imageSprite = new PIXI.Sprite(imageTexture);
        }
        // imageSprite.roundPixels = true;

        imageSprite.blendMode = PIXI.BLEND_MODES.NORMAL; // Adjust blend mode if needed
        const rotation = fill.rotation;
        // imageSprite.backgroundColor = 0x000000;
        imageSprite.rotation = ((fill.rotation || 0) * Math.PI) / 180;
        imageSprite.anchor.set(0.5, 0.5);

        const isTilt = [90, 270, -90].includes(rotation);

        if (["FIT"].includes(fill.scaleMode)) {
          const scaleX =
            child.size.width /
            (isTilt ? imageSprite.height : imageSprite.width);
          const scaleY =
            child.size.height /
            (isTilt ? imageSprite.width : imageSprite.height);

          const scale = Math.min(scaleX, scaleY);
          imageSprite.scale.set(scale);

          imageSprite.position.set(child.size.width / 2, child.size.height / 2);
        } else if (["FILL", "TILE", "CROP"].includes(fill.scaleMode)) {
          const imageAspectRatio = isTilt
            ? imageSprite.height / imageSprite.width
            : imageSprite.width / imageSprite.height;

          // Calculate the aspect ratio of the polygon
          const polygonAspectRatio = child.size.width / child.size.height;

          if (imageAspectRatio > polygonAspectRatio) {
            imageSprite.height = child.size.height;
            imageSprite.width = child.size.height * imageAspectRatio;
          } else {
            if (isTilt) {
              imageSprite.width = child.size.width / imageAspectRatio;
              imageSprite.height = child.size.width;
            } else {
              imageSprite.width = child.size.width;
              imageSprite.height = child.size.width / imageAspectRatio;
            }
          }
          imageSprite.position.set(child.size.width / 2, child.size.height / 2);
        }

        pixiChild.addChild(imageSprite);
      }

      pixiChild = drawShape(child, pixiChild);

      if (child.relativeTransform) {
        const { x, y } = child.relativeTransform;
        pixiChild.position.set(x, y);
        pixiChild.pivot.set(x, y);
      }

      if (fill.opacity !== undefined) {
        pixiChild.alpha = fill.opacity;
      }

      pixiChild.endFill();

      // MASK SECTION
      let maskContainer = new PIXI.Container();
      if (imageSprite) {
        let mask = new PIXI.Graphics();
        mask.position.set(child.position.x, child.position.y);

        mask.beginFill(0xffffff);
        mask = drawShape(child, mask);
        if (child.relativeTransform) {
          const { x, y } = child.relativeTransform;
          mask.position.set(x, y);
          mask.pivot.set(x, y);
        }
        mask.endFill();
        maskContainer.mask = mask;
        maskContainer.addChild(mask);
      }
      // Add the mask as a child, so that the mask is positioned relative to its parent
      maskContainer.addChild(pixiChild);
      // Offset by the window's frame width
      pixiObject.addChild(maskContainer);
    });
  }
  if (
    child?.fills?.length > 0 &&
    child.fills.filter((f) => f.type === "GRADIENT_LINEAR")?.length > 0
  ) {
    const gradientColors = child.fills[0].gradientStops;
    const gradTexture = createGradTexture();
    pixiObject.beginFill();
    pixiObject
      .beginTextureFill({ texture: gradTexture })
      .drawRect(
        pixiObject.x,
        pixiObject.y,
        pixiObject.width,
        pixiObject.height
      );
    function createGradTexture() {
      const canvas = document.createElement("canvas");
      canvas.width = pixiObject.width;
      canvas.height = pixiObject.height;
      const context = canvas.getContext("2d");

      // Create a linear gradient
      const gradient = context.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradientColors.forEach((stop) => {
        gradient.addColorStop(
          stop.position,
          `rgba(${stop.color.r * 255},${stop.color.g * 255},${stop.color.b * 255
          },${stop.color.a})`
        );
      });
      // Fill the canvas with the gradient
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      return PIXI.Texture.from(canvas);
    }
    pixiObject.endFill();
  }

  if (
    child?.fills?.length > 0 &&
    child.fills.filter((f) => f.type === "GRADIENT_RADIAL")?.length > 0
  ) {
    const gradientColors = child.fills[0].gradientStops;
    const gradTexture = createGradTexture();
    pixiObject.beginFill();
    pixiObject.beginTextureFill({ texture: gradTexture });
    pixiObject = drawShape(child, pixiObject);
    function createGradTexture() {
      const canvas = document.createElement("canvas");
      canvas.width = pixiObject.width;
      canvas.height = pixiObject.height;
      const context = canvas.getContext("2d");
      const gradient = context.createRadialGradient(
        child.absoluteBoundingBox.width / 2,
        child.absoluteBoundingBox.height / 2,
        0,
        child.absoluteBoundingBox.width / 2,
        child.absoluteBoundingBox.height / 2,
        child.absoluteBoundingBox.width / 2
      );
      gradientColors.forEach((stop) => {
        gradient.addColorStop(
          stop.position,
          `rgba(${stop.color.r * 255},${stop.color.g * 255},${stop.color.b * 255
          },${stop.color.a})`
        );
      });
      context.fillStyle = gradient;
      context.fillRect(
        0,
        0,
        child.absoluteBoundingBox.width,
        child.absoluteBoundingBox.height
      );
      return PIXI.Texture.from(canvas);
    }
    pixiObject.endFill();
  }
  if (
    child?.fills?.length > 0 &&
    child.fills.filter((f) => f.type === "GRADIENT_ANGULAR")?.length > 0
  ) {
    const gradientColors = child.fills[0].gradientStops;
    const gradientTransformMatrix = child.fills[0].gradientTransform;
    const rotationAngle = Math.abs(
      Math.atan2(gradientTransformMatrix[1][0], gradientTransformMatrix[0][0])
    );
    const gradTexture = createGradTexture();
    pixiObject.beginFill();
    pixiObject.beginTextureFill({ texture: gradTexture });
    pixiObject = drawShape(child, pixiObject);

    function createGradTexture() {
      const canvas = document.createElement("canvas");
      canvas.width = child.absoluteBoundingBox.width;
      canvas.height = child.absoluteBoundingBox.height;
      const context = canvas.getContext("2d");
      const gradient = context.createConicGradient(
        rotationAngle,
        child.absoluteBoundingBox.width / 2,
        child.absoluteBoundingBox.height / 2
      );
      gradientColors.forEach((stop) => {
        gradient.addColorStop(
          stop.position,
          `rgba(${stop.color.r * 255},${stop.color.g * 255},${stop.color.b * 255
          },${stop.color.a})`
        );
      });
      context.fillStyle = gradient;
      context.fillRect(
        0,
        0,
        child.absoluteBoundingBox.width,
        child.absoluteBoundingBox.height
      );
      return PIXI.Texture.from(canvas);
    }
    pixiObject.endFill();
  }

  if (child.relativeTransform && child.fillGeometry?.length > 0) {
    let { x, y, scaleX, scaleY, rotation, skewX, skewY } =
      child.relativeTransform;
    // const rotationSign = Math.sign()
    pixiObject.position.set(x, y);
    pixiObject.rotation = rotation;
    if (skewX < 0 && skewY < 0) {
      pixiObject.rotation = -rotation;
    }
  }
  if (child.relativeTransform && child.strokeGeometry?.length > 0) {
    let { x, y, scaleX, scaleY, rotation, skewX, skewY } =
      child.relativeTransform;
    pixiObject.position.set(x, y);
    pixiObject.rotation = rotation;
    if (skewX < 0 && skewY < 0) {
      pixiObject.rotation = -rotation;
    }
  }
  if (!child.relativeTransform) {
    pixiObject.rotation = Math.PI * (child.rotation / 180);
  }

  if (child?.effects?.length > 0) {
    let filters = [];
    child.effects.forEach((effect) => {
      if (effect.type === "DROP_SHADOW") {
        const color = parseColor(effect.color);
        const filter = new DropShadowFilter({
          alpha: effect.visible ? effect.color.a : 0,
          distance: Math.sqrt(effect.offset.x ** 2 + effect.offset.y ** 2),
          blur: effect.radius / 5,
          color: color,
          offset: effect.offset,
          spread: effect.radius,
          quality: 4,
          resolution: 4,
        });
        // filter.padding = 100;
        // pixiObject.filterArea = null;

        // if (child.id === '137:97') {
        //   pixiObject.beginFill(0x0000ff);
        //   pixiObject.drawRect(0, 0, child.absoluteBoundingBox.width, child.absoluteBoundingBox.height);
        //   pixiObject.endFill();
        // }

        filters.push(filter);
      }
    });
    // const antialiasFilter = new FXAAFilter();
    pixiObject.filters = filters;
  }

  // add events -> part 1
  const interactions = child.interactions;
  const dragEvents = ["ON_DRAG", "ON_DRAG_START"];
  const nonDragInteractions = interactions?.filter(
    (i) => dragEvents.indexOf(i.event) === -1
  );
  const dragInteractions = interactions?.filter(
    (i) => dragEvents.indexOf(i.event) !== -1
  );

  if (nonDragInteractions?.length) {
    nonDragInteractions.forEach((interaction) => {
      attachInteraction({
        interaction,
        pixiObject,
        originalJson,
        setAnimationType,
        setFigmaJson,
        path,
        dragTarget,
      });
    });
  }

  // add drag controllers
  let dragConfig = child.dragConfig && child.dragConfig;
  if (child.modifiers?.length) {
    dragConfig = get(
      child.modifiers.filter((i) => i.type === "DRAGGABLE"),
      [0, "config"]
    );
  }

  if (dragConfig != null) {
    pixiObject.eventMode = "static";
    pixiObject.cursor = "pointer";

    // pixiObject.anchor.set(0.5);
    // pixiObject.scale.set(3);

    // parse events
    let onDrag = null;
    let onDragBegin = null;
    for (const dragInteraction of dragInteractions || []) {
      switch (dragInteraction.event) {
        case "ON_DRAG":
          onDrag = dragInteraction;
          break;
        case "ON_DRAG_START":
          onDragBegin = dragInteraction;
          break;
        default:
      }
    }

    function onDragEnd(event) {
      if (dragData && dragData.id !== child.id) return;

      if (dragTarget && dropAreas?.length > 0) {
        const dropAreaIndex = dropAreas.findIndex((item) => {
          const width = item.width;
          const height = item.height;
          const areaBounds = { ...item.area.getBounds(), width, height };
          const dragX = event.global.x;
          const dragY = event.global.y;
          function pointInRectangle(
            rectX,
            rectY,
            rectWidth,
            rectHeight,
            pointX,
            pointY
          ) {
            const rectRight = rectX + rectWidth;
            const rectBottom = rectY + rectHeight;
            if (
              rectX <= pointX &&
              pointX <= rectRight &&
              rectY <= pointY &&
              pointY <= rectBottom
            ) {
              return true;
            } else {
              return false;
            }
          }
          return pointInRectangle(
            areaBounds.x,
            areaBounds.y,
            areaBounds.width,
            areaBounds.height,
            dragX,
            dragY
          );
        });

        // move to original position
        dragTarget.x = child.relativeTransform.x;
        dragTarget.y = child.relativeTransform.y;

        if (dropAreaIndex !== -1) {
          const onDrop = get(dropAreas, [dropAreaIndex, "onDrop"]);
          if (onDrop) {
            attachInteraction({
              interaction: onDrop,
              pixiObject,
              originalJson,
              setAnimationType,
              setFigmaJson,
              path,
              dragTarget,
              dropTargetPath: get(dropAreas, [dropAreaIndex, "path"]),
            });
          }
        }
      }

      // add events -> part 2
      if (onDrag) {
        attachInteraction({
          interaction: onDrag,
          pixiObject,
          originalJson,
          setAnimationType,
          setFigmaJson,
          path,
          dragTarget,
        });
      }

      // end
      app.stage.off("pointermove", onDragMove);
      if (dragTarget) {
        dragTarget.alpha = 1;
        if (!dragConfig.axis) dragTarget.pivot.set(0);
        dragTarget = null;
        dragData = null;
      }
    }

    function onDragMove(event) {
      if (dragTarget) {
        const min = get(dragConfig.dragRange, [1]);
        const max = get(dragConfig.dragRange, [0]);

        function nearestStepIntersection(rangeStart, rangeEnd, step, value) {
          if (value < rangeStart) return rangeStart;
          if (value > rangeEnd) return rangeEnd;
          return Math.round((value - rangeStart) / step) * step + rangeStart;
        }

        if (min != null && max != null) {
          if (dragConfig.axis === 90) {
            dragTarget.y = Math.min(
              Math.max(
                nearestStepIntersection(
                  min,
                  max,
                  dragConfig.stepSize,
                  dragTarget.parent.toLocal(event.global).y
                ),
                min
              ),
              max
            );
          }
          if (dragConfig.axis === 0)
            dragTarget.x = Math.min(
              Math.max(dragTarget.parent.toLocal(event.global).x, min),
              max
            );
        }

        if (!dragConfig.axis) {
          const maxDragRange = dragConfig.maxDragRange;
          if (!maxDragRange) {
            dragTarget.parent.toLocal(event.global, null, dragTarget.position);
            return;
          }

          const newPosition = event.data.getLocalPosition(dragTarget.parent);
          dragTarget.x = newPosition.x;
          dragTarget.y = newPosition.y;

          // causing irregular constraints
          // const minX = 0;
          // const minY = 0;
          // const maxX = get(maxDragRange, 0);
          // const maxY = get(maxDragRange, 1);
          // dragTarget.x = Math.min(Math.max(newPosition.x, minX), maxX);
          // dragTarget.y = Math.min(Math.max(newPosition.y, minY), maxY);
        }
      }
    }

    function onDragStart() {
      if (!dragConfig.axis) this.pivot.set(50);
      this.alpha = 0.5;
      dragTarget = this;
      dragData = child;
      app.stage.on("pointermove", onDragMove);

      if (onDragBegin) {
        attachInteraction({
          interaction: onDragBegin,
          pixiObject,
          originalJson,
          setAnimationType,
          setFigmaJson,
          path,
          dragTarget,
        });
      }
    }

    pixiObject.on("pointerdown", onDragStart, pixiObject);
    pixiObject.on("pointerup", onDragEnd);
    pixiObject.on("pointerupoutside", onDragEnd);
  }

  if (dropConfig && dropAreas?.find(({ id }) => child.id === id) == null) {
    dropAreas.push({
      id: child.id,
      area: pixiObject,
      ...pixiObject.getBounds(),
      path,
      onDrop: (interactions || []).find(
        (interaction) => interaction.event === "ON_DROP"
      ),
    });
  }

  return pixiObject;
};

const drawShape = (child, pixiObject) => {
  if (child.type === "GROUP" || child.type === "TEXT") {
    pixiObject.drawRect(0, 0, child.size.width, child.size.height);
    child.type === "TEXT" &&
      pixiObject.position.set(child.position.x, child.position.y);
  }
  if (child.fillGeometry?.length > 0 && child.type !== "TEXT") {
    fillSVGPath(pixiObject, child.fillGeometry[0].data);
  }

  if (child.strokes?.length > 0) {
    const visibleStrokes = child.strokes.filter(
      (stroke) => stroke.visible !== false
    );
    visibleStrokes.forEach((stroke) => {
      let pixiChild = new PIXI.Graphics();
      pixiChild.zIndex = child.zIndex + 1;
      let strokeColor =
        String(stroke?.color).length === 6
          ? `0x${stroke?.color}`
          : stroke?.color;
      pixiChild.beginFill(strokeColor);
      pixiChild.alpha = stroke.opacity;
      drawSVGPath(pixiChild, child.strokeGeometry[0].data);

      pixiChild.endFill();
      pixiChild.position.set(0, 0);
      pixiObject.addChild(pixiChild);
    });
    // pixiObject.closePath();
  }

  return pixiObject;
};
