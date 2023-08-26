import * as PIXI from "pixi.js";
// import { getFilter } from "../utils/pixiJS";
import "@pixi/gif";
import { DropShadowFilter } from "@pixi/filter-drop-shadow";
import { FXAAFilter } from "@pixi/filter-fxaa";

import "@pixi/graphics-extras";
import { drawSVGPath, fillSVGPath, parseColor } from "../utils/layout";
import TextInput from "./PIXI.TextInput";
import { debounce } from "lodash";

export const renderFigmaFromParsedJson = (
  children,
  { scaleHeight, scaleWidth, devicePixelRatio }
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
    });
  });
  container.backgroundColor = 0xffffff;
  // const pixiChild = new PIXI.Graphics();
  // pixiChild.position.set(298, 15);
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
  scaleInfo
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
    case "UNION":
    case "BOOLEAN_OPERATION":
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

  // pixiObject?.scale?.set(
  // 	getScaleWidth(scaleInfo, {
  // 		width: child?.size?.width,
  // 		maxWIdth: child?.maxWIdth,
  // 		minWidth: child?.minWidth,
  // 	})
  // );

  if (parentContainer && pixiObject) {
    parentContainer.addChild(pixiObject);
  }
  if (child?.type !== "INPUT" && child.children) {
    child.children.forEach((grandchild) => {
      if (grandchild.type === "TEXT") {
        grandchild.parent = child;
      }
      renderChild(grandchild, pixiObject, screenWidth, screenHeight, scaleInfo);
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

const renderText = async (child) => {
  console.log("🚀 ~ file: renderer.js:127 ~ renderText ~ child:", child);
  if (!child.visible) return;
  const fontNameObj = child.fontName || {};
  const fontFamily = fontNameObj.family || "Arial"; // Default to 'Arial' if fontFamily is not provided
  let fontSize = child.fontSize || 12; // Default to 12 if fontSize is not provided
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

  let wrapperPixiObject = await renderPolygon(child);
  if (child.characters === "Quantity of soil (grams)") {
    console.log(
      "🚀 ~ file: renderer.js:166 ~ renderText ~ child:",
      child,
      textAlignHorizontal
    );
  }
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
    wordWrapWidth: child?.absoluteBoundingBox?.width + 2,
    lineHeight: lineHeightValue,
    letterSpacing: letterSpacingValue,
    fill: fillColor,
    trim: child.textAlignVertical === "CENTER",
  });

  const pixiObject = new PIXI.Text();
  pixiObject.resolution = 2;
  pixiObject.text = child?.characters;
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
        stroke: {
          color: 0xabafc6,
          width: Number(child?.strokeWeight) || 0,
        },
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

  // if (child.id === "3220:5028") {
  //     console.log(
  //         "🚀 ~ file: renderer.js:475 ~ renderPolygon ~ child:",
  //         child,
  //         pixiObject
  //     );
  //     fillColor = 0x0000ff;
  //     // pixiObject.beginFill(0x0000ff);
  //     // pixiObject.drawRect(
  //     // 	0,
  //     // 	0,
  //     // 	child.absoluteBoundingBox.width,
  //     // 	child.absoluteBoundingBox.height
  //     // );
  //     // pixiObject.endFill();
  // }
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
      pixiObject.addChild(pixiChild);
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
        console.log("🚀 ~ file: renderer.js:499 ~ child.effects.forEach ~ effect:", effect)
        const color = parseColor(effect.color);
        const filter = new DropShadowFilter({
          alpha: effect.visible ? effect.color.a : 0,
          distance: Math.sqrt(effect.offset.x ** 2 + effect.offset.y ** 2),
          blur: effect.radius / 5,
          color: color,
          offset: effect.offset,
          spread: effect.radius / 5,
          quality: 4,
          resolution: 4,
        });
        // filter.padding = 100;
        // pixiObject.filterArea = null;

        // if (child.id === "288:1178") {
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

  // if(child.id === '3220:5061'){
  //     console.log("🚀 ~ file: renderer.js:475 ~ renderPolygon ~ child:", child, pixiObject)
  //     pixiObject.beginFill(0x0000ff);
  //     pixiObject.drawRect(0, 0, child.absoluteBoundingBox.width, child.absoluteBoundingBox.height || 1);
  //     pixiObject.endFill();
  // }

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
