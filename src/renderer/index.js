// src/renderer/index.js

import * as PIXI from "pixi.js";
import { parseFigmaJson } from "../parser/parser";
import { renderFigmaFromParsedJson } from "./renderer";



// Function to render the Figma JSON using PIXI.js
export const renderFigmaJson = (figmaJson, elementId) => {
	// Check if canvas already exists
	const currentElement = document.getElementById(elementId);
	const canvas = currentElement?.querySelector("canvas");
	if (!canvas) {
		// Parse the Figma JSON into a PIXI Container
		const parsedJson = parseFigmaJson(figmaJson);
		const container = renderFigmaFromParsedJson(parsedJson.children);

		// Create a PIXI Application
		const app = new PIXI.Application({
			width: 800,
			height: 800,
			backgroundColor: "red",
		});

		// Append the PIXI view to the specified HTML element
		document.getElementById(elementId).appendChild(app.view);
		// Add the container to the PIXI stage
		app.stage.addChild(container);
        // app.stage.y = container.height / container.resolution
        // app.stage.x = minX;
        // // app.stage.scale.x = -1;
        // app.stage.y = minY;
        // app.stage.scale.y = -1;
        console.log("🚀 ~ file: index.js:50 ~ renderFigmaJson ~ app:", app)
        // app.x = -minX;
        // app.y = -minY;
		// const debugGraphics = new PIXI.Graphics();
		// debugGraphics.lineStyle(2, 0x00ff00);
		// debugGraphics.drawRect(0, 0, 800, 600);
		// container.addChild(debugGraphics);
		// Optionally, you can add code here to set up interactivity, animations, etc.
	}
};