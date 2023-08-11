import {
  calculateAbsoluteRenderBoundPosition,
  calculateSize,
  calculateRotation,
  extractColor,
  calculateStroke,
  parseColor,
} from "../utils/layout";

export const parseFigmaJson = (figmaJson) => {
  const children = [figmaJson];
  const { minX, minY } = calculateMinXY(children);
  const parsedChildren = children.map((child) => {
    return parseChild(child, 1, minX, minY);
  });
  return { children: parsedChildren, minX, minY };
};

const calculateMinXY = (children) => {
  let minX = Infinity;
  let minY = Infinity;
  children.forEach((child) => {
    const x = child?.absoluteBoundingBox?.x || 0;
    const y = child?.absoluteBoundingBox?.y || 0;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    if (child.children) {
      const { minX: childMinX, minY: childMinY } = calculateMinXY(
        child.children
      );
      minX = Math.min(minX, childMinX);
      minY = Math.min(minY, childMinY);
    }
  });
  return { minX, minY };
};

const parseChild = (child, level, minX, minY) => {
  if (!level) return;
  let childBoundingX = child?.absoluteBoundingBox?.x;
  let childBoundingY = child?.absoluteBoundingBox?.y;
  let renderBoundX = child?.absoluteRenderBounds?.x;
  let renderBoundY = child?.absoluteRenderBounds?.y;
  if (typeof childBoundingX === "number") childBoundingX += Math.abs(minX);
  if (typeof childBoundingY === "number") childBoundingY += Math.abs(minY);
  if (typeof renderBoundX === "number") renderBoundX += Math.abs(minX);
  if (typeof renderBoundY === "number") renderBoundY += Math.abs(minY);
  const pixiObject = {
    type: child.type,
    x: childBoundingX,
    y: childBoundingY,
    width: child?.absoluteBoundingBox?.width || 0,
    height: child?.absoluteBoundingBox?.height || 0,
    level,
    children: child.children
      ? child.children.map((c) => parseChild(c, level + 1, minX, minY))
      : [],
    cornerRadius: child?.cornerRadius,
    rectangleCornerRadii: child?.rectangleCornerRadii,
    cornerSmoothing: child?.cornerSmoothing,
    clipsContent: child?.clipsContent,
    rotation: child?.rotation,
    overflowDirection: child?.overflowDirection,
  };
  switch (child.type) {
    case "CANVAS":
      return parseCanvas(child, level, pixiObject);
    case "FRAME":
      return parseFrame(child, level, pixiObject);
    case "GROUP":
      return parseFrame(child, level, pixiObject);
    case "RECTANGLE":
      return parseRectangle(child, level, pixiObject);
    case "POLYGON":
      return parsePolygon(child, level, pixiObject);
  }
};

const parseCanvas = (child, level, pixiObject) => {
  pixiObject.zIndex = level;
  return pixiObject;
};

const parseFrame = (child, level, pixiObject) => {
  pixiObject.zIndex = level;
  pixiObject.backgroundColor =
    child?.background?.length > 0
      ? parseColor(child.background[0].color)
      : child.backgroundColor;
  let fills = child?.fills?.length > 0 ? child.fills : null;
  if (fills) {
    // console.log("🚀 ~ file: parser.js:85 ~ parseFrame ~ fills:", fills);
    pixiObject.fills = fills.map((fill) => {
      fill.color = parseColor(fill.color);
      return fill;
    });
  }
  return pixiObject;
};

const parseRectangle = (child, level, pixiObject) => {
  pixiObject.zIndex = level;
  pixiObject.fills = child.fills;
  pixiObject.fillColor =
    child?.fills?.length > 0 ? parseColor(child.fills[0].color) : 0x000000;
  return pixiObject;
};

const parsePolygon = (child, level, pixiObject) => {
  const position = calculateAbsoluteRenderBoundPosition(child);
  const size = calculateSize(child);
  const rotation = calculateRotation(child);
  const color = extractColor(child);
  const { stroke, strokeWeight } = calculateStroke(child);
  pixiObject.position = { x: position.x, y: position.y };
  pixiObject.size = { width: size.width, height: size.height };
  pixiObject.rotation = rotation;
  pixiObject.color = color;
  pixiObject.stroke = stroke;
  pixiObject.strokeWeight = strokeWeight;
  const sides = child.sides || 3; // Default to 5 sides if not specified
  const points = [];
  for (let i = 0; i < sides; i++) {
    const angle = (i / sides) * 2 * Math.PI;
    points.push(
      (Math.cos(angle) * size.width) / 2 + size.width / 2,
      (Math.sin(angle) * size.height) / 2 + size.height / 2
    );
  }
  pixiObject.points = points;
  return pixiObject;
};
