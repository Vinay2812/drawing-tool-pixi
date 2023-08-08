import * as PIXI from "pixi.js";

export const renderFigmaFromParsedJson = (children) => {
	const container = new PIXI.Container();
	container.sortableChildren = true;
	children.forEach((child) => {
		renderChild(child, container);
	});
	return container;
};

const renderChild = (child, parentContainer) => {
	console.log("🚀 ~ file: renderer.js:13 ~ renderChild ~ child:", child);
	if (!child) return;
	let pixiObject;
	switch (child.type) {
		case "CANVAS":
			pixiObject = renderCanvas(child);
			break;
		case "FRAME":
			pixiObject = renderFrame(child);
			break;
		case "GROUP":
			pixiObject = renderFrame(child);
			break;
		case "RECTANGLE":
			pixiObject = renderRectangle(child);
			break;
		case "POLYGON":
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
	const pixiObject = new PIXI.Graphics();
	pixiObject.zIndex = child.zIndex;
	if (child.backgroundColor) {
		pixiObject.backgroundColor = child.backgroundColor;
	}
	if (child?.fills?.length > 0) {
		child.fills.forEach((fill) => {
			if (fill.type === "SOLID") {
				pixiObject.beginFill(fill.color);
			}
		});
	}
	pixiObject.drawRect(child.x, child.y, child.width, child.height);
	if (child.backgroundColor) {
		pixiObject.endFill();
	}
	return pixiObject;
};

const renderRectangle = (child) => {
	const pixiObject = new PIXI.Graphics();
	pixiObject.zIndex = child.level;
	pixiObject.beginFill(child.fillColor);
	pixiObject.drawRect(child.x, child.y, child.width, child.height);
	pixiObject.endFill();
	return pixiObject;
};

const renderPolygon = (child) => {
	const pixiObject = new PIXI.Graphics();
	pixiObject.position.set(child.position.x, child.position.y);
	pixiObject.rotation = child.rotation;
	pixiObject.beginFill(child.color);
	// Additional rendering logic for polygons
	pixiObject.drawPolygon(child.points);
	pixiObject.endFill();
	return pixiObject;
};
