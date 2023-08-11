import * as PIXI from "pixi.js";
import { getFilter } from "../utils/pixiJS";

let exampleRects = [];
export const renderFigmaFromParsedJson = (children) => {
	const container = new PIXI.Container();
	container.sortableChildren = true;
	children.forEach((child) => {
		renderChild(child, container);
	});
	container.backgroundColor = 0xffffff;
	// const testGraphics = new PIXI.Graphics();
	// testGraphics.zIndex = 1;
	// testGraphics.position.set(109, 653);
	// testGraphics.beginFill(0x27ae60);
	// testGraphics.drawPolygon([
	//     0,
	//     4,
	//     0,
	//     1.79086,
	//     1.79086,
	//     0,
	//     4,
	//     0,
	//     84,
	//     0,
	//     86.2091,
	//     0,
	//     88,
	//     1.79086,
	//     88,
	//     4,
	//     88,
	//     44,
	//     88,
	//     46.2091,
	//     86.2091,
	//     48,
	//     84,
	//     48,
	//     4,
	//     48,
	//     1.79086,
	//     48,
	//     0,
	//     46.2091,
	//     0,
	//     44,
	//     0,
	//     4
	// ]);
	// testGraphics.zIndex = 1;
	// testGraphics.endFill();
	// container.addChild(testGraphics);
	// if (exampleRects.length > 0) {
	// 	exampleRects.forEach((rect) => {
	// 		container.addChild(rect);
	// 	});
	// }
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
		if (child.type === "RECTANGLE")
			console.log(
				"🚀 ~ file: renderer.js:78 ~ renderChild ~ parentContainer:",
				child,
				pixiObject,
				parentContainer
			);
		parentContainer.addChild(pixiObject);
	}
	if (child.children) {
		child.children.forEach((grandchild) => {
			renderChild(grandchild, pixiObject);
		});
	}
	// if (child.id === "8:87") {
	// 	console.log(
	// 		"🚀 ~ file: renderer.js:86 ~ renderChild ~ pixiObject:",
	// 		child,
	// 		pixiObject
	// 	);
	// 	exampleRects.push(pixiObject);
	// }
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
}

const renderPolygon = (child) => {
	console.log("🚀 ~ file: renderer.js:93 ~ renderPolygon ~ child:", child);
	const pixiObject = new PIXI.Graphics();
	pixiObject.zIndex = child.zIndex;

	pixiObject.position.set(child.position.x, child.position.y);
	let fillColor =
		child?.fills?.length > 0 &&
		child.fills[0].visible &&
		child.fills[0].color;
	fillColor = fillColor && String(fillColor).length === 6 ? `0x${fillColor}` : fillColor;
	fillColor && pixiObject.beginFill(fillColor);

	if (child.fillGeometry?.length > 0) {
		if (child.type !== "ELLIPSE") {
			// pixiObject.drawEllipse(child.fillGeometry[0].data);
			child.type === "RECTANGLE" &&
				console.log(
					"🚀 ~ file: renderer.js:138 ~ renderPolygon ~ child.fillGeometry:",
					child.fillGeometry
				);
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
		console.log(
			"🚀 ~ file: renderer.js:171 ~ renderPolygon ~ child.arcData:",
			child.arcData
		);
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
	}

	if (child.relativeTransform) {
		const { x, y, scaleX, scaleY, rotation, skewX, skewY } =
			child.relativeTransform;
		pixiObject.setTransform(x, y, scaleX, scaleY, rotation, skewX, skewY);
	}
	fillColor && pixiObject.endFill();
	if (child.type === "RECTANGLE") {
		// pixiObject.position.set(child.x, child.y);
		pixiObject.zIndex = child.zIndex;
		// exampleRects.push(pixiObject);
		console.log(
			"🚀 ~ file: renderer.js:205 ~ renderPolygon ~ pixiObject",
			fillColor,
			child,
			pixiObject
		);
	}

	return pixiObject;
};
