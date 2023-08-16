import * as PIXI from "pixi.js";
// import { getFilter } from "../utils/pixiJS";
import { AnimatedGIF } from "@pixi/gif";
import "@pixi/graphics-extras";
import { drawSVGPath } from "../utils/layout";
import TextInput from "./PIXI.TextInput";
import { debounce } from "lodash";

export const renderFigmaFromParsedJson = (
  children,
  { scaleHeight, scaleWidth }
) => {
  console.log(
    "🚀 ~ file: renderer.js:6 ~ renderFigmaFromParsedJson ~ children:",
    children
  );
  const container = new PIXI.Container();
  container.sortableChildren = true;
  const screenWidth = children[0].absoluteBoundingBox.width;
  const screenHeight = children[0].absoluteBoundingBox.height;
  children.forEach((child) => {
    renderChild(child, container, screenWidth, screenHeight, {
      scaleHeight,
      scaleWidth,
    });
  });
  container.backgroundColor = 0xffffff;
  // const pixiChild = new PIXI.Graphics();
  // pixiChild.position.set(128, 56);
  // pixiChild.zIndex = 200;
  // // pixiChild.rotation = 1.5707963267948963;
  // pixiChild.beginFill(0x00cccc);
  // // pixiChild.drawTorus(180, 24, 36, 18, 0, Math.PI * 2);
  // pixiChild.drawPolygon([
  //     0,
  //     0,
  //     56,
  //     0,
  //     56,
  //     56,
  //     0,
  //     56,
  //     0,
  //     0
  // ]);
  // pixiChild.endFill();
  // container.addChild(pixiChild);

  container.scale.set(scaleWidth);
  return container;
};

const renderChild = async (
  child,
  parentContainer,
  screenWidth,
  screenHeight,
  { scaleHeight, scaleWidth }
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

      pixiObject?.scale?.set(1 / scaleWidth);
      break;
    case "INPUT":
      pixiObject = await renderInput(child);
      break;
    default:
      break;
  }

  if (parentContainer && pixiObject) {
    console.log(
      "🚀 ~ file: renderer.js:35 ~ renderChild ~ parentContainer:",
      parentContainer,
      pixiObject
    );

    parentContainer.addChild(pixiObject);
  }
  if (child?.type !== "INPUT" && child.children) {
    child.children.forEach((grandchild) => {
      if (grandchild.type === "TEXT") {
        grandchild.parent = child;
      }
      renderChild(grandchild, pixiObject, screenWidth, screenHeight, {
        scaleHeight,
        scaleWidth,
      });
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
  console.log("🚀 ~ file: renderer.js:84 ~ renderText ~ child:", child);

  const fontNameObj = child.fontName || {};
  const fontFamily = fontNameObj.family || "Arial"; // Default to 'Arial' if fontFamily is not provided
  const fontStyle = fontNameObj.style || "normal"; // Default to 'normal' if fontStyle is not provided
  const fontSize = child.fontSize || 12; // Default to 12 if fontSize is not provided
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
  if (child.id === "72:327") {
    wrapperPixiObject.beginFill(0x0000ff);
    wrapperPixiObject.drawRect(
      0,
      0,
      child.absoluteBoundingBox.width,
      child.absoluteBoundingBox.height
    );
    wrapperPixiObject.endFill();
  }
  console.log(
    "🚀 ~ file: renderer.js:107 ~ renderText ~ wrapperPixiObject:",
    wrapperPixiObject
  );
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
    wordWrapWidth: child.absoluteBoundingBox.width,
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
  if (child.id === "72:325") {
    console.log("🚀 ~ file: renderer.js:93 ~ renderPolygon ~ child:", child);
  }
  let pixiObject = new PIXI.Graphics();
  pixiObject.zIndex = child.zIndex;
  if (child.clipsContent) {
    let mask = new PIXI.Graphics();
    mask.beginFill(0x000000);
    mask = drawShape(child, mask);
    // mask.position.set(child.position.x, child.position.y);
    mask.endFill();
    pixiObject.addChild(mask);
    pixiObject.mask = mask;
  }
  // pixiObject.position.set(child.position.x, child.position.y);
  let fillColor =
    child?.fills?.length > 0 && child.fills[0].visible && child.fills[0].color;
  // if (child.id === "71:341") {
  // 	console.log(
  // 		"🚀 ~ file: renderer.js:109 ~ renderPolygon ~ fillColor",
  // 		fillColor,
  // 		child
  // 	);
  // 	fillColor = 0x0000ff;
  // 	// pixiObject.width = 236;
  // 	// pixiObject.height = 316;
  // }

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
      }
      // else if (fill.type === "IMAGE") {
      //   const gifRef = fill.gifRef;
      //   const imageRef = fill.imageRef;

      //   if (gifRef) {
      //     imageSprite = await fetch(gifRef)
      //       .then((res) => res.arrayBuffer())
      //       .then(AnimatedGIF.fromBuffer)
      //       .then((image) => pixiChild.addChild(image));
      //   } else {
      //     const imageTexture = PIXI.Texture.from(imageRef); // Load the texture
      //     imageSprite = new PIXI.Sprite(imageTexture);
      //   }

      //   imageSprite.blendMode = PIXI.BLEND_MODES.NORMAL; // Adjust blend mode if needed
      //   const rotation = fill.rotation;

      //   imageSprite.rotation = ((fill.rotation || 0) * Math.PI) / 180;
      //   imageSprite.anchor.set(0.5, 0.5);

      //   const isTilt = [90, 270, -90].includes(rotation);

      //   if (["FIT"].includes(fill.scaleMode)) {
      //     const scaleX =
      //       child.size.width /
      //       (isTilt ? imageSprite.height : imageSprite.width);
      //     const scaleY =
      //       child.size.height /
      //       (isTilt ? imageSprite.width : imageSprite.height);

      //     const scale = Math.min(scaleX, scaleY);
      //     imageSprite.scale.set(scale);

      //     imageSprite.position.set(child.size.width / 2, child.size.height / 2);
      //   } else if (["FILL", "TILE", "CROP"].includes(fill.scaleMode)) {
      //     const imageAspectRatio = isTilt
      //       ? imageSprite.height / imageSprite.width
      //       : imageSprite.width / imageSprite.height;

      //     // Calculate the aspect ratio of the polygon
      //     const polygonAspectRatio = child.size.width / child.size.height;

      //     if (imageAspectRatio > polygonAspectRatio) {
      //       imageSprite.height = child.size.height;
      //       imageSprite.width = child.size.height * imageAspectRatio;
      //     } else {
      //       if (isTilt) {
      //         imageSprite.width = child.size.width / imageAspectRatio;
      //         imageSprite.height = child.size.width;
      //       } else {
      //         imageSprite.width = child.size.width;
      //         imageSprite.height = child.size.width / imageAspectRatio;
      //       }
      //     }
      //     imageSprite.position.set(child.size.width / 2, child.size.height / 2);
      //   }

      //   pixiChild.addChild(imageSprite);
      // }

      // pixiChild = drawShape(child, pixiChild);

      if (child.relativeTransform) {
        const { x, y } = child.relativeTransform;
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

  return pixiObject;
};

const drawShape = (child, pixiObject) => {
  if (child.fillGeometry?.length > 0) {
    if (child.type !== "ELLIPSE") {
      pixiObject.drawPolygon(child.fillGeometry[0].data);
    }
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
      // pixiObject.lineStyle(strokeWeight, stroke.color, stroke.opacity, 0.5, true);
      // // pixiObject.lineTextureStyle({
      // //     color: stroke.color,
      // //     width: strokeWeight,
      // //     alpha: stroke.opacity,
      // //     alignment: 0.5,
      // //     cap: strokeCap,
      // //     join: strokeJoin,
      // // });
      // pixiObject.lineCap = strokeCap;
      // pixiObject.lineJoin = strokeJoin;
      // pixiObject.miterLimit = 1;
      // pixiObject.strokeAlignment = strokeAlign;
      // pixiObject.lineTo(child.size.width, child.size.height);
      // if(strokeCap === "CIRCLE_FILLED") {
      //     pixiObject.moveTo(child.relativeTransform.x, child.relativeTransform.y);
      //     pixiObject.arc(
      //         child.relativeTransform.x,
      //         child.relativeTransform.y,
      //         0,
      //         0,
      //         Math.PI * 2,
      //         false

      //     )
      //     // pixiObject.drawPolygon(child.size.width / 2, child.size.height / 2, 4);
      // }
      let pixiChild = new PIXI.Graphics();
      pixiChild.zIndex = child.zIndex + 1;
      // pixiChild.pivot.set(
      // 	child.relativeTransform.x,
      // 	child.relativeTransform.y
      // );
      // pixiChild.pivot.set(
      //     0,
      //     0
      // );
      pixiChild.beginFill(
        String(stroke?.color).length === 6
          ? `0x${stroke?.color}`
          : stroke?.color
      );
      drawSVGPath(pixiChild, child.strokeGeometry[0].data);
      // if (child.type === "ELLIPSE") {
      // 	pixiChild.drawTorus(
      // 		child.size.width / 2,
      // 		child.size.height / 2,
      // 		child.size.width / 2 - strokeWeight,
      // 		child.size.width / 2,
      // 		0,
      // 		Math.PI * 2
      // 	);
      // } else {
      // 	pixiChild.drawPolygon(child.strokeGeometry[0].data);
      // }
      pixiChild.endFill();
      // pixiChild.rotation =  - child.relativeTransform?.rotation;
      pixiChild.position.set(0, 0);
      pixiObject.addChild(pixiChild);
      console.log(
        "🚀 ~ file: renderer.js:262 ~ drawShape ~ child:",
        child,
        visibleStrokes,
        pixiChild
      );
      // if (child.id === "6:156") {
      // }
    });
    // pixiObject.closePath();
  }

  if (child.arcData) {
    const centerX = child.size.width / 2;
    const centerY = child.size.height / 2;
    const startingAngle = child.arcData.startingAngle;
    const endingAngle = child.arcData.endingAngle;
    const innerRadius = child.arcData.innerRadius;
    pixiObject.moveTo(centerX, centerY);
    pixiObject.arc(
      centerX,
      centerY,
      innerRadius,
      startingAngle,
      endingAngle,
      false
    );
    pixiObject.arc(
      centerX,
      centerY,
      child.size.width / 2,
      endingAngle,
      startingAngle,
      true
    );
    pixiObject.closePath();
    pixiObject.height = child.absoluteBoundingBox.height;
    pixiObject.width = child.absoluteBoundingBox.width;
  }

  return pixiObject;
};
