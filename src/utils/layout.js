// src/utils/layout.js

// Function to calculate the absolute position of an object
export const calculateAbsolutePosition = (object) => {
	const { x, y } = object.absoluteBoundingBox || { x: 0, y: 0 };
	return { x, y };
};

export const calculateAbsoluteRenderBoundPosition = (object) => {
	const { x, y } = object.absoluteBoundingBox || { x: 0, y: 0 };
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
	// console.log("🚀 ~ file: layout.js:35 ~ rgbaToHex ~ color:", color)
	let r = Math.round(color.r * 255);
	let g = Math.round(color.g * 255);
	let b = Math.round(color.b * 255);
	let a = color.a && Math.round(color.a * 255);

	r = r.toString(16).padStart(2, "0");
	g = g.toString(16).padStart(2, "0");
	b = b.toString(16).padStart(2, "0");
	a = a && a.toString(16).padStart(2, "0");

	return `${r}${g}${b}${a || ""}`;
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

export function shiftOrigin(pathData, dx, dy) {
	// Split the path data into commands and coordinates
	const commands = pathData
		.replace("Z", "")
		.split(/(?=[ML])/)
		.filter(Boolean);
	// console.log("🚀 ~ file: layout.js:80 ~ shiftOrigin ~ commands:", commands);

	// Process each command and coordinate
	const shiftedCommands = commands.map((command) => {
		const cmd = command.charAt(0);
		const coords = command.slice(1).trim().split(" ");
		// console.log(
		// 	"🚀 ~ file: layout.js:86 ~ shiftedCommands ~ coords:",
		// 	coords
		// );

		// If the command is 'M' or 'L', shift the coordinates
		if (cmd === "M" || cmd === "L") {
			const shiftedCoords = [];
			for (let i = 0; i < coords.length; i += 2) {
				const x = parseFloat(coords[i]) + dx;
				const y = parseFloat(coords[i + 1]) + dy;
				shiftedCoords.push(`${x} ${y}`);
			}
			return cmd + shiftedCoords.join(" ");
		}

		// If the command is 'Z', return it unchanged
		return command;
	});

	return shiftedCommands.join("");
}

export function convertToDrawPolygonData(pathData, type="") {

	// type === "RECTANGLE" && console.log("🚀 ~ file: layout.js:114 ~ convertToDrawPolygonData ~ pathData:", pathData)
	// Split the path data into commands and coordinates
    if(typeof pathData !== 'string'){
        pathData = pathData.toString()
    }
	const commands = pathData.replace("Z", "").split(/(?=[MLC])/);
	// console.log("🚀 ~ file: layout.js:121 ~ convertToDrawPolygonData ~ commands:", commands)

	// Initialize an array to hold the points
	const points = [];

	// Process each command and coordinate
	commands.forEach((command) => {
		const cmd = command.charAt(0);
		const coords = command.slice(1).trim().split(" ");

		// If the command is 'M' or 'L', add the coordinates to the points array
		if (cmd === "M" || cmd === "L" || cmd === "C") {
			for (let i = 0; i < coords.length; i += 2) {
				let x = parseFloat(coords[i]);
				let y = parseFloat(coords[i + 1]);
				points.push(x, y);
			}
		}
	});

	// console.log(
	// 	"🚀 ~ file: layout.js:135 ~ convertToDrawPolygonData ~ points:",
	// 	pathData,
  //       commands,
	// 	points
	// );
	return points;
}

// export function convertToDrawPolygonData(pathData, absX, absY) {
// 	// Remove any 'Z' command and split the path data by space and 'L'
// 	const coords = pathData.replace("Z", "").split(/[LM]/);
// 	console.log(
// 		"🚀 ~ file: layout.js:107 ~ convertToDrawPolygonData ~ coords:",
// 		coords
// 	);

// 	// Initialize an array to hold the points
// 	const points = [];

// 	// Skip the 'M' command and add the coordinates to the points array
// 	for (let i = 1; i < coords.length; i += 1) {
// 		const coordinates = coords[i];
// 		console.log(
// 			"🚀 ~ file: layout.js:126 ~ convertToDrawPolygonData ~ coordinates:",
// 			coordinates
// 		);
// 		if (!coordinates) continue;
// 		const [xC, yC] = coordinates.split(" ");
// 		const x = parseFloat(xC) + absX;
// 		const y = parseFloat(yC) + absY;
// 		points.push(x, y);
// 	}
// 	console.log(
// 		"🚀 ~ file: layout.js:119 ~ convertToDrawPolygonData ~ points:",
// 		pathData,
// 		coords,
// 		absX,
// 		absY,
// 		points
// 	);

// 	return points;
// }

export function getTransformParameters(relativeTransform) {
        // Extract values from the Figma matrix
        const [a, c, e] = relativeTransform[0];
        const [b, d, f] = relativeTransform[1];
    
        // Calculate skew values from the matrix
        const skewX = Math.atan2(-c, d); // Negative because of the coordinate system difference
        const skewY = Math.atan2(b, a);

        // Calculate rotation values from the matrix, also calculate rotation sign
        const sign = Math.sign(a * d - b * c);
        const rotation = Math.acos((a + d) / 2) * sign;
	return {
		x: e , // x position
		y: f, // y position
		scaleX: a, // x scale
		scaleY: d, // y scale
		rotation, // rotation (you may need to calculate this based on a, b, c, d)
		skewX ,// skew x
		skewY, // skew y
	};
}

export function drawSVGPath(graphics, path) {
    const commands = path.split(/(?=[MLCZ])/);

    for (let command of commands) {
        const type = command.charAt(0);
        const values = command.slice(1).trim().split(/[ ,]+/).map(Number);

        switch (type) {
            case 'M':
                graphics.moveTo(values[0], values[1]);
                break;
            case 'L':
                graphics.lineTo(values[0], values[1]);
                break;
            case 'C':
                graphics.bezierCurveTo(values[0], values[1], values[2], values[3], values[4], values[5]);
                break;
            case 'Z':
                graphics.closePath();
                break;
        }
    }

}

export function fillSVGPath(graphics, path) {
    const commands = path.split(/(?=[MLCZ])/);


    for (let command of commands) {
        const type = command.charAt(0);
        const values = command.slice(1).trim().split(/[ ,]+/).map(Number);

        switch (type) {
            case 'M':
                graphics.moveTo(values[0], values[1]);
                break;
            case 'L':
                graphics.lineTo(values[0], values[1]);
                break;
            case 'C':
                graphics.bezierCurveTo(values[0], values[1], values[2], values[3], values[4], values[5]);
                break;
            case 'Z':
                graphics.closePath();
                break;
        }
    }

    graphics.endFill(); // End the fill
}
