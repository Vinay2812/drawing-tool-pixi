import * as PIXI from "pixi.js";

import { DropShadowFilter } from '@pixi/filter-drop-shadow';

export function getFilter(params) {
    const alpha = (parseInt(params.color.slice(-2), 16) / 255).toFixed(2);
    const color = params.color.slice(0, -2);
    console.log("🚀 ~ file: pixiJS.js:6 ~ getFilter ~ params:", params, alpha, color)
    // Extract alpha from hex rgba color
    switch (params.type) {
        case "DROP_SHADOW":
            const dropShadowFilter = new DropShadowFilter();
            dropShadowFilter.color = color;
            dropShadowFilter.alpha = alpha; // Extracting alpha from the color
            dropShadowFilter.offset = params.offset;
            dropShadowFilter.blur = params.radius;
            dropShadowFilter.resolution = 4;
            dropShadowFilter.spread = params.spread;
            dropShadowFilter.visible = params.visible;
            dropShadowFilter.blendMode = PIXI.BLEND_MODES[params.blendMode];
            // dropShadowFilter.showShadowBehindNode = params.showShadowBehindNode; // If you have a custom implementation

            return dropShadowFilter;
        case "INNER_SHADOW":
            const innerShadowFilter = new DropShadowFilter();
            innerShadowFilter.color = color;
            innerShadowFilter.alpha = alpha; // Extracting alpha from the color
            innerShadowFilter.offset = params.offset;
            innerShadowFilter.blur = params.radius;
            innerShadowFilter.spread = params.spread;
            innerShadowFilter.visible = params.visible;
            innerShadowFilter.blendMode = PIXI.BLEND_MODES[params.blendMode];
            // innerShadowFilter.showShadowBehindNode = params.showShadowBehindNode; // If you have a custom implementation

            return innerShadowFilter;
        default:
            return null;
    }
}