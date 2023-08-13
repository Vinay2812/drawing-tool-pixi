import * as PIXI from "pixi.js";
import { getFilter } from "../utils/pixiJS";

export const renderFigmaFromParsedJson = (children) => {
	const container = new PIXI.Container();
	container.sortableChildren = true;
	children.forEach((child) => {
		renderChild(child, container);
	});
	container.backgroundColor = 0xffffff;
	return container;
};

const renderChild = (child, parentContainer) => {
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
		case "ELLIPSE":
			pixiObject = renderPolygon(child);
			break;
	}
	if (parentContainer && pixiObject) {

		parentContainer.addChild(pixiObject);
	}
	if (child.children) {
		child.children.forEach((grandchild) => {
			renderChild(grandchild, pixiObject);
		});
	}
};

const renderCanvas = (child) => {
	const pixiObject = new PIXI.Container();
	pixiObject.zIndex = child.zIndex;
	return pixiObject;
};

const renderFrame = (child) => {
	const pixiObject = new PIXI.Container();

	pixiObject.zIndex = child.zIndex;
	pixiObject.position.set(child.position.x, child.position.y);
	pixiObject.width = child.size.x;
	pixiObject.height = child.size.y;

	return pixiObject;
};

const renderPolygon = (child) => {
	if (child.visible === false) return;
	const pixiObject = new PIXI.Graphics();
	pixiObject.zIndex = child.zIndex;
	const defaultColor = 0xffffcc - child.level * 0x000022;
	pixiObject.width = child.size.width;
	pixiObject.height = child.size.height;
	let fillColor =
		child?.fills?.length > 0 &&
		child.fills[0].visible &&
		child.fills[0].color;
	fillColor =
		fillColor && String(fillColor).length === 6
			? `0x${fillColor}`
			: fillColor;
	fillColor
		? pixiObject.beginFill(fillColor)
		: pixiObject.beginFill(defaultColor, 0);

	if (child.fillGeometry?.length > 0) {
		if (child.type !== "ELLIPSE") {
			pixiObject.drawPolygon(child.fillGeometry[0].data);
		}
	}
	if (child.strokes?.length > 0) {
		const visibleStrokes = child.strokes.filter(
			(stroke) => stroke.visible !== false
		);
		visibleStrokes.forEach((stroke) => {
			pixiObject.lineStyle(
				child.strokeWidth,
				stroke.color,
				stroke.opacity
			);
			pixiObject.drawPolygon(child.strokeGeometry[0].data);
		});
	}
	if (child.arcData) {
		const centerX = child.size.width / 2;
		const centerY = child.size.height / 2;
		const startingAngle = child.arcData.startingAngle;
		const endingAngle = child.arcData.endingAngle;
		const innerRadius = child.arcData.innerRadius;
		const radiusX = child.size.width / 2; // Assuming the ellipse's x-radius is half the width
		const radiusY = child.size.height / 2; // Assuming the ellipse's y-radius is half the height

		if (radiusX === radiusY) {
			// It's a circle
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
				radiusX,
				endingAngle,
				startingAngle,
				true
			);
		} else {
			// It's an ellipse
			pixiObject.drawEllipse(centerX, centerY, radiusX, radiusY);
		}

		pixiObject.closePath();
	}

	if (child.relativeTransform && child.fillGeometry?.length > 0) {
		let { x, y, scaleX, scaleY, rotation, skewX, skewY } =
			child.relativeTransform;
		pixiObject.position.set(x, y);
		pixiObject.rotation = rotation;
	}
	fillColor && pixiObject.endFill();

	return pixiObject;
};
