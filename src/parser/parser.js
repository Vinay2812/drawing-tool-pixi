import {
	calculateAbsoluteRenderBoundPosition,
	calculateSize,
	calculateRotation,
	extractColor,
	calculateStroke,
	parseColor,
	getTransformParameters,
	convertToDrawPolygonData,
	shiftOrigin,
} from "../utils/layout";

import rectangleKeys from "../keys/rectangle";

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
	// if (typeof childBoundingX === "number") childBoundingX += Math.abs(minX);
	// if (typeof childBoundingY === "number") childBoundingY += Math.abs(minY);
	// if (typeof renderBoundX === "number") renderBoundX += Math.abs(minX);
	// if (typeof renderBoundY === "number") renderBoundY += Math.abs(minY);
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
	};
	switch (child.type) {
		case "CANVAS":
			return parseCanvas(child, level, pixiObject);
		case "FRAME":
            // return parseFrame(child, level, pixiObject)
		case "GROUP":
		case "RECTANGLE":
		case "POLYGON":
		case "VECTOR":
		case "STAR":
		case "LINE":
		case "ELLIPSE":
			return parsePolygon(child, level, pixiObject, minX, minY);
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
		console.log("🚀 ~ file: parser.js:85 ~ parseFrame ~ fills:", fills);
		pixiObject.fills = fills.map((fill) => {
			fill.color = parseColor(fill.color);
			return fill;
		});
	}
	return pixiObject;
};

const parseRectangle = (child, level, pixiObject) => {
	console.log("🚀 ~ file: parser.js:99 ~ parseRectangle ~ child:", child);
	pixiObject.zIndex = level;
	rectangleKeys.forEach((key) => {
		if (key === "fills") {
			pixiObject.fills = child.fills.map((fill) => {
				if (fill.type === "SOLID") {
					fill.color = parseColor(fill.color);
				} else if (fill.type === "IMAGE") {
					fill.imageTransform =
						fill.imageTransform?.length > 0
							? getTransformParameters(fill.imageTransform)
							: null;
				}
				return fill;
			});
		} else if (key === "effects") {
			pixiObject.effects = child.effects.map((effect) => {
				if (typeof effect.color !== "string") {
					effect.color = parseColor(effect.color);
				} else {
					console.log(
						"🚀 ~ file: parser.js:120 ~ pixiObject.effects=child.effects.map ~ effect:",
						effect
					);
				}
				return effect;
			});
		}
		// else if (key === 'size'){
		//     pixiObject.size = { width: child.width, height: child.height };
		// }
		else if (key === "relativeTransform") {
			pixiObject.relativeTransform =
				child.relativeTransform?.length > 0
					? getTransformParameters(child.relativeTransform)
					: null;
		} else if (key === "fillGeometry") {
			pixiObject.fillGeometry = child.fillGeometry?.map((geometry) => {
				geometry.data = convertToDrawPolygonData(geometry.data);
				return geometry;
			});
		} else {
			pixiObject[key] = child[key];
		}
	});
	return pixiObject;
};

const parsePolygon = (child, level, pixiObject, minX, minY) => {
	if (child.type === "RECTANGLE") {
		console.log("🚀 ~ file: parser.js:106 ~ parsePolygon ~ child:", child);
	}
	const position = calculateAbsoluteRenderBoundPosition(child);
	const size = calculateSize(child);
	const rotation = calculateRotation(child);
	const color = extractColor(child);
	const { stroke, strokeWeight } = calculateStroke(child);
	pixiObject.position = { x: position.x, y: position.y };
	pixiObject.size = { width: size.width, height: size.height };
	pixiObject.rotation = rotation;
	pixiObject.color = color;
	pixiObject.strokes = child.strokes?.map((stroke) => {
		stroke.color = parseColor(stroke.color);
		return stroke;
	});
	pixiObject.arcData = child.arcData;
	pixiObject.strokeGeometry = child.strokeGeometry;
	pixiObject.zIndex = level;
	pixiObject.strokeWeight = strokeWeight;
	let fills = child?.fills?.length > 0 ? child.fills : null;
	if (fills) {
		console.log("🚀 ~ file: parser.js:85 ~ parseFrame ~ fills:", fills);
		pixiObject.fills = fills.map((fill) => {
			fill.color = parseColor(fill.color);
			return fill;
		});
	}
	let fillGeometry =
		child?.fillGeometry?.length > 0 ? child.fillGeometry : null;
	if (fillGeometry) {
		console.log("fillGeometry", fillGeometry);
		pixiObject.fillGeometry = fillGeometry.map((geometry) => {
			geometry.data = convertToDrawPolygonData(geometry.data, child.type);
			return geometry;
		});
	}
	pixiObject.relativeTransform =
		child?.relativeTransform?.length > 0
			? getTransformParameters(child.relativeTransform)
			: null;
	return pixiObject;
};
