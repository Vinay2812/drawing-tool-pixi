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
import textKeys from "../keys/text";

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

const parseChild = (child, level, minX, minY, parentObject = null) => {
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
		id: child.id,
		type: child.type,
		x: childBoundingX,
		y: childBoundingY,
		width: child?.absoluteBoundingBox?.width || 0,
		height: child?.absoluteBoundingBox?.height || 0,
		level,
		children: child.children
			? child.children.map((c) =>
					parseChild(c, level + 1, minX, minY, child)
			  )
			: [],
	};
	switch (child.type) {
		case "CANVAS":
			return parseCanvas(child, level, pixiObject, parentObject);
		case "FRAME":
		case "GROUP":
		case "RECTANGLE":
		case "POLYGON":
		case "VECTOR":
		case "STAR":
		case "LINE":
        case "INSTANCE":
		case "ELLIPSE":
			return parsePolygon(
				child,
				level,
				pixiObject,
				minX,
				minY,
				parentObject
			);
		case "TEXT":
			return parseText(child, level, pixiObject, parentObject);
		default:
			console.log("🚀 ~ file: parser.js:106 ~ parseChild ~ child", child);
	}
};

const parseCanvas = (child, level, pixiObject) => {
	pixiObject.zIndex = level;
	return pixiObject;
};

const parseText = (child, level, pixiObject, parentObject) => {
    pixiObject.zIndex = level;
    pixiObject = {
        ...pixiObject,
        ...child,
        parent: parentObject,
    }
    return pixiObject;
};

const parsePolygon = (child, level, pixiObject, minX, minY, parentObject) => {
	if (child.id === "8:87") {
		console.log("🚀 ~ file: parser.js:106 ~ parsePolygon ~ child:", child);
	}
	rectangleKeys.forEach((key) => {
		pixiObject[key] = child[key];
	});
	const position = calculateAbsoluteRenderBoundPosition(child);
	const size = calculateSize(child);
	const rotation = calculateRotation(child);
	// const color = extractColor(child);
	const { stroke, strokeWeight } = calculateStroke(child);
	pixiObject.position = { x: position.x, y: position.y };
	pixiObject.size = { width: size.width, height: size.height };
	pixiObject.rotation = rotation;
	pixiObject.clipsContent = child.clipsContent;
	// pixiObject.color = color;
	pixiObject.strokes = child.strokes?.map((stroke) => {
		stroke.color = parseColor(stroke.color);
		return stroke;
	});
	pixiObject.visible = child.visible;
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
	// let strokeGeometry =
	//     child?.strokeGeometry?.length > 0 ? child.strokeGeometry : null;
	// if (strokeGeometry) {
	//     console.log("strokeGeometry", strokeGeometry);
	//     pixiObject.strokeGeometry = strokeGeometry.map((geometry) => {
	//         geometry.data = convertToDrawPolygonData(geometry.data, child.type);
	//         return geometry;
	//     });
	// }
	pixiObject.relativeTransform =
		child?.relativeTransform?.length > 0
			? getTransformParameters(child.relativeTransform, parentObject)
			: null;
	if (child.id === "8:87") {
		console.log(
			"🚀 ~ file: parser.js:106 ~ parsePolygon ~ pixiObject:",
			child,
			pixiObject
		);
	}
    // pixiObject.parent = parentObject;

	return pixiObject;
};
