// src/utils/layout.js

// Function to calculate the absolute position of an object
export const calculateAbsolutePosition = (object) => {
	const { x, y } = object.absoluteBoundingBox || { x: 0, y: 0 };
	return { x, y };
};

export const calculateAbsoluteRenderBoundPosition = (object) => {
	const { x, y } = object.absoluteRenderBounds || { x: 0, y: 0 };
	return { x, y };
};

// Function to calculate the size of an object
export const calculateSize = (object) => {
	const { width, height } = object.absoluteBoundingBox || {
		width: 0,
		height: 0,
	};
	return { width, height };
};

// Function to calculate the rotation of an object
export const calculateRotation = (object) => {
	return object.rotation || 0;
};

// Function to extract color from an object
export const extractColor = (object) => {
	const color = object.fills?.[0]?.color || { r: 1, g: 1, b: 1, a: 1 };
	return ((color.r * 255) << 16) + ((color.g * 255) << 8) + color.b * 255;
};

function rgbaToHex(color) {
	let r = Math.round(color.r * 255);
	let g = Math.round(color.g * 255);
	let b = Math.round(color.b * 255);
	let a = Math.round(color.a * 255);

	r = r.toString(16).padStart(2, "0");
	g = g.toString(16).padStart(2, "0");
	b = b.toString(16).padStart(2, "0");
	a = a.toString(16).padStart(2, "0");

	return `${r}${g}${b}${a}`;
}

export const parseColor = (color) => {
	if (!color) {
		return 0xffffff;
	}
	return rgbaToHex(color);
};

// Function to calculate the scale of an object
export const calculateScale = (object) => {
	return object.constraints || { vertical: "TOP", horizontal: "LEFT" };
};

// Function to calculate the stroke properties of an object
export const calculateStroke = (object) => {
	const stroke = object.strokes?.[0] || {};
	const strokeWeight = object.strokeWeight || 1;
	return { stroke, strokeWeight };
};

// Function to calculate the effects of an object
export const calculateEffects = (object) => {
	return object.effects || [];
};

// Function to determine if an object is visible
export const isVisible = (object) => {
	return object.visible !== false;
};
