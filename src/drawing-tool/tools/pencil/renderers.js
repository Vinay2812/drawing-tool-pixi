import * as PIXI from "pixi.js"
import { SmoothGraphics } from "@pixi/graphics-smooth"
import { getPencilKey } from "../utils/keys"
import { LINE_WIDTH } from "../utils/config"
import { renderPoint } from "../line"

function getAveragePoint(points) {
    const len = points.length;
    let totalX = 0;
    let totalY = 0;
    let pt, i;
    let count = 0;
    for (i = 0; i < len; i++) {
        count++;
        pt = points[i];
        totalX += pt.x;
        totalY += pt.y;
    }
    return {
        x: totalX / count,
        y: totalY / count
    }

};


function createSmoothPoints(points) {
    const windowSize = 5
    const smoothedPoints = [];

    for (let i = 0; i < points.length; i++) {
      const windowStart = Math.max(0, i - Math.floor(windowSize / 2));
      const windowEnd = Math.min(points.length - 1, i + Math.floor(windowSize / 2));
      const xSum = points.slice(windowStart, windowEnd + 1).reduce((sum, p) => sum + p.x, 0);
      const ySum = points.slice(windowStart, windowEnd + 1).reduce((sum, p) => sum + p.y, 0);
      const count = windowEnd - windowStart + 1;
      smoothedPoints.push({ x: xSum / count, y: ySum / count });
    }
    return smoothedPoints;
}

export function renderPencilGraphics(pencil, viewport, graphicsStoreRef) {
    const { points } = pencil
    if (!points?.length) return;
    const smoothPoints = createSmoothPoints(points)
    const pencilGraphics = new SmoothGraphics()

    if (points.length < 4) {
        const avgPoint = getAveragePoint(smoothPoints)
        renderPoint(pencilGraphics, avgPoint, LINE_WIDTH / 2, "red")

    }
    else {
        const color = "red"
        pencilGraphics.lineStyle(LINE_WIDTH, color, 1)
        pencilGraphics.moveTo(smoothPoints[0].x, smoothPoints[0].y)
        // g.lineTo(smoothPoints[1].x, smoothPoints[1].y)

        for (let i = 1; i < smoothPoints.length; i++) {
            const p1 = smoothPoints[i - 1]
            const p2 = smoothPoints[i]
            pencilGraphics.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y)
        }
    }

    const key = getPencilKey(pencil)
    graphicsStoreRef.current[key]?.forEach(g => viewport.removeChild(g))
    graphicsStoreRef.current[key] = [pencilGraphics]
    viewport.addChild(pencilGraphics)
}
