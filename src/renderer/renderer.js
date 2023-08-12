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
	// testGraphics.position.set(157, 16);
	// testGraphics.skew.set(-1, 1);
	// testGraphics.rotation = 0;
	// // testGraphics.scale.set(Math.abs(2.393918396847994e-16), Math.abs(2.393918396847994e-16));
	// testGraphics.beginFill(0x27ae60);
	// testGraphics.drawPolygon([0, 0, 109, 0, 109, 102, 0, 102, 0, 0]);
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
};

const renderPolygon = (child) => {
	console.log("🚀 ~ file: renderer.js:93 ~ renderPolygon ~ child:", child);
	const pixiObject = new PIXI.Graphics();
	pixiObject.zIndex = child.zIndex;

	// pixiObject.position.set(child.position.x, child.position.y);
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
		: pixiObject.beginFill(0xffffcc, 1);

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
	// if(child.type === "FRAME") {
	//     pixiObject.drawRect(child.position.x, child.position.y, child.size.width, child.size.height);
	// }

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

	if (child.relativeTransform && child.fillGeometry?.length > 0) {
		let { x, y, scaleX, scaleY, rotation, skewX, skewY } =
			child.relativeTransform;

		if (child.type === "FRAME") {
            if(Math.abs(scaleX) < 0.0001) {
                scaleX = 1* Math.sign(scaleX);
            }
            if(Math.abs(scaleY) < 0.0001) {
                scaleY = 1* Math.sign(scaleY);
            }
			// scaleX = 1;
			// scaleY = 1;
			// rotation = rotation * Math.sign(child.rotation);
            // pivotX = child.size.width / 2;
            // pivotY = child.size.height / 2;
		}
		// pixiObject.setTransform(
		// 	x,
		// 	y,
		// 	scaleX,
		// 	scaleY,
		// 	rotation,
		// 	skewX,
		// 	skewY,
		// );
        pixiObject.position.set(x, y);
        pixiObject.scale.set(scaleX, scaleY);
        pixiObject.rotation = rotation;
        pixiObject.skew.set(skewX, skewY);

	}
	fillColor && pixiObject.endFill();
	if (child.id === "8:87") {
		// pixiObject.position.set(child.x, child.y);
		pixiObject.zIndex = child.zIndex;
		exampleRects.push(pixiObject);
		console.log(
			"🚀 ~ file: renderer.js:205 ~ renderPolygon ~ pixiObject",
			fillColor,
			child,
			pixiObject
		);
	}

	return pixiObject;
};
