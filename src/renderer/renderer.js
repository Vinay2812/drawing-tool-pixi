import * as PIXI from "pixi.js";
// import { getFilter } from "../utils/pixiJS";
import { AnimatedGIF } from "@pixi/gif";
import { DropShadowFilter } from "@pixi/filter-drop-shadow";
import { FXAAFilter } from "@pixi/filter-fxaa";

import "@pixi/graphics-extras";
import { drawSVGPath, fillSVGPath, parseColor } from "../utils/layout";
import TextInput from "./PIXI.TextInput";
import { debounce } from "lodash";
import { DrawingTool } from "../drawing-tool";

export const renderFigmaFromParsedJson = (
  children,
  { scaleHeight, scaleWidth, devicePixelRatio, app, canvasContainerId }
) => {
  const container = new PIXI.Container();
  container.sortableChildren = true;
  const screenWidth = children[0].absoluteBoundingBox.width;
  const screenHeight = children[0].absoluteBoundingBox.height;
  children.forEach((child) => {
    renderChild(child, container, screenWidth, screenHeight, {
      scaleHeight,
      scaleWidth,
      devicePixelRatio,
    }, app, canvasContainerId);
  });
  // const child = {
  //   modifiers: ["DRAWING_TOOL"],
  //   canvasWidth: screenWidth,
  //   canvasHeight: screenHeight,
  //   gridSize: 50,
  //   showSubGrid: true,
  //   unit: "m",
  //   hiddenTools: ["circle"],
  //   defaultDrawingItems: [],
  // }
  // renderChild(child, container, screenWidth, screenHeight, {
  //   scaleHeight,
  //   scaleWidth,
  //   devicePixelRatio,
  // }, app, canvasContainerId);

  container.backgroundColor = 0xffffff;
  // const pixiChild = new PIXI.Graphics();
  // // pixiChild.position.set(128, 56);
  // pixiChild.zIndex = 200;
  // // pixiChild.rotation = 1.5707963267948963;
  // pixiChild.beginFill(0x00cccc);
  // // pixiChild.drawTorus(180, 24, 36, 18, 0, Math.PI * 2);
  // drawSVGPath(
  //     pixiChild, "M21 2C22.1046 2 23 1.10457 23 2.38498e-08C23 -1.10457 22.1046 -2 21 -2L21 2ZM7.76799 4.69313L6.5078 3.1401L7.76799 4.69313ZM12.5352 40.2184L11.729 42.0487L12.5352 40.2184ZM26.5364 41.2571L26.0091 39.3278L26.5364 41.2571ZM38.063 33.2415L39.688 34.4074L38.063 33.2415ZM41.963 19.7544L43.9595 19.6358L41.963 19.7544ZM37.9689 5.474C37.2233 4.65907 35.9582 4.6029 35.1432 5.34853C34.3283 6.09416 34.2721 7.35925 35.0178 8.17418L37.9689 5.474ZM21 -2C15.7226 -2 10.6058 -0.185153 6.5078 3.1401L9.02818 6.24617C12.4135 3.49922 16.6404 2 21 2L21 -2ZM6.5078 3.1401C2.40982 6.46535 -0.419975 11.0987 -1.5069 16.263L2.40735 17.0868C3.30524 12.8207 5.6429 8.99312 9.02818 6.24617L6.5078 3.1401ZM-1.5069 16.263C-2.59382 21.4272 -1.87174 26.8081 0.538209 31.5031L4.09678 29.6765C2.10595 25.798 1.50946 21.3529 2.40735 17.0868L-1.5069 16.263ZM0.538209 31.5031C2.94816 36.1981 6.89937 39.9215 11.729 42.0487L13.3414 38.3881C9.35165 36.6308 6.08761 33.5549 4.09678 29.6765L0.538209 31.5031ZM11.729 42.0487C16.5587 44.176 21.973 44.5776 27.0636 43.1863L26.0091 39.3278C21.8038 40.4772 17.3311 40.1454 13.3414 38.3881L11.729 42.0487ZM27.0636 43.1863C32.1543 41.795 36.6117 38.6954 39.688 34.4074L36.4379 32.0757C33.8966 35.6179 30.2144 38.1785 26.0091 39.3278L27.0636 43.1863ZM39.688 34.4074C42.7644 30.1194 44.2725 24.9039 43.9595 19.6358L39.9665 19.8731C40.2251 24.225 38.9793 28.5334 36.4379 32.0757L39.688 34.4074ZM43.9595 19.6358C43.6465 14.3677 41.5314 9.36753 37.9689 5.474L35.0178 8.17418C37.9607 11.3906 39.708 15.5212 39.9665 19.8731L43.9595 19.6358Z"
  // )
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
  scaleInfo,
  app,
  canvasContainerId,
) => {
  if (!child) return;
  let pixiObject;
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
      pixiObject = await renderPolygon(child, screenWidth, screenHeight);
      break;
    case "TEXT":
      pixiObject = await renderText(child);
      break;
    case "INPUT":
      pixiObject = await renderInput(child);
      break;
    default:
      break;
  }
  if (child.modifiers?.find((type) => type === "DRAWING_TOOL")) {
    const {
      canvasWidth,
      canvasHeight,
      gridSize,
      showSubGrid,
      hiddenTools,
      defaultDrawingItems,
      unit,
    } = child;
    const drawingTool = new DrawingTool({
      canvasWidth,
      canvasHeight,
      app,
      pixiContainer: parentContainer,
      canvasContainerId,
      gridSize,
      showSubGrid,
      hiddenTools,
      defaultDrawingItems,
      unit,
    })
    drawingTool.render()
  }
  pixiObject?.scale?.set(
    getScaleWidth(scaleInfo, {
      width: child?.size?.width,
      maxWIdth: child?.maxWIdth,
      minWidth: child?.minWidth,
    })
  );

  if (parentContainer && pixiObject) {
    parentContainer.addChild(pixiObject);
  }
  if (child?.type !== "INPUT" && child.children) {
    child.children.forEach((grandchild) => {
      if (grandchild.type === "TEXT") {
        grandchild.parent = child;
      }
      renderChild(grandchild, pixiObject, screenWidth, screenHeight, scaleInfo, app, canvasContainerId);
    });
  }
};

const renderCanvas = (child) => {
  const pixiObject = new PIXI.Container();
  pixiObject.zIndex = child.zIndex;
  return pixiObject;
};

const renderText = async (child) => {
  if (!child.visible) return;
  const fontNameObj = child.fontName || {};
  const fontFamily = fontNameObj.family || "Arial"; // Default to 'Arial' if fontFamily is not provided
  const fontStyle = fontNameObj.style || "normal"; // Default to 'normal' if fontStyle is not provided
  let fontSize = child.fontSize || 12; // Default to 12 if fontSize is not provided
  const fontWeight = child.fontWeight || "500"; // Default to 'normal' if fontWeight is not provided
  const textAlignHorizontal = child.textAlignHorizontal || "left"; // Default to 'left' if textAlignHorizontal is not provided
  const textDecoration = child.textDecoration || "none"; // Default to 'none' if textDecoration is not provided

  const lineHeightObj = child.lineHeight || {};
  let lineHeightValue = lineHeightObj.value || fontSize * 1.2; // Default to 1.2 times the fontSize if lineHeightValue is not provided
  if (lineHeightObj.unit === "PERCENT") {
    lineHeightValue = (lineHeightValue / 100) * fontSize;
  }

  const letterSpacingObj = child.letterSpacing || {};
  let letterSpacingValue = letterSpacingObj.value || 0; // Default to 0 if letterSpacingValue is not provided
  if (letterSpacingObj.unit === "PERCENT") {
    letterSpacingValue = (letterSpacingValue / 100) * fontSize;
  }

  let wrapperPixiObject = await renderPolygon(child);
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
  });

  const pixiObject = new PIXI.Text(child.characters, style);
  pixiObject.zIndex = child.zIndex;
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

const renderPolygon = async (child, screenWidth, screenHeight) => {
  if (!child.visible) return;

  let pixiObject = new PIXI.Graphics();

  pixiObject.zIndex = child.zIndex;
  if (child.clipsContent) {
    let mask = new PIXI.Graphics();
    mask.beginFill(0x000000);
    mask = drawShape(child, mask);
    mask.endFill();
    pixiObject.addChild(mask);
    pixiObject.mask = mask;
  }

  let fillColor =
    child?.fills?.length > 0 &&
    child.fills.filter((f) => f.type === "IMAGE")?.length === 0 &&
    child.fills[0].visible &&
    child.fills[0].color;

  const fillOpacity = child?.fills?.length > 0 && child.fills[0].opacity;

  fillColor
    ? pixiObject.beginFill(fillColor, fillOpacity || 1)
    : pixiObject.beginFill(0xffffcc, 0);
  if (child.type !== "TEXT") {
    pixiObject = drawShape(child, pixiObject);
  }
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

        if (gifRef) {
          imageSprite = await fetch(gifRef)
            .then((res) => {
              return res.arrayBuffer();
            })
            .then((buff) => {
              return AnimatedGIF.fromBuffer(buff);
            })
            .then((image) => pixiChild.addChild(image));
        } else {
          const imageTexture = PIXI.Texture.from(imageUrl); // Load the texture
          imageSprite = new PIXI.Sprite(imageTexture);
        }

        imageSprite.blendMode = PIXI.BLEND_MODES.NORMAL; // Adjust blend mode if needed
        const rotation = fill.rotation;
        imageSprite.backgroundColor = 0x000000;
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
        const filter = new DropShadowFilter({
          alpha: effect.visible ? effect.color.a : 0,
          distance: Math.sqrt(effect.offset.x ** 2 + effect.offset.y ** 2),
          blur: effect.radius / 5,
          color: 0x000000,
          offset: effect.offset,
          spread: effect.radius,
          quality: 4,
        });
        // filter.padding = 100;
        // pixiObject.filterArea = null;

        if (child.id === "137:97") {
          // pixiObject.beginFill(0x0000ff);
          // pixiObject.drawRect(0, 0, child.absoluteBoundingBox.width, child.absoluteBoundingBox.height);
          // pixiObject.endFill();
        }

        filters.push(filter);
      }
    });
    // const antialiasFilter = new FXAAFilter();
    pixiObject.filters = filters;
  }

  return pixiObject;
};

const drawShape = (child, pixiObject) => {
  if (child.fillGeometry?.length > 0) {
    fillSVGPath(pixiObject, child.fillGeometry[0].data);
  }
  if (child.type === "GROUP") {
    pixiObject.drawRect(
      child.relativeTransform.x,
      child.relativeTransform.y,
      child.size.width,
      child.size.height
    );
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
