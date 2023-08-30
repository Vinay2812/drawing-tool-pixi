import { SmoothGraphics } from "@pixi/graphics-smooth"
import * as PIXI from "pixi.js"
import { renderSvg } from "../toolbox/renderer"
import ReactDOMServer from "react-dom/server"
import { renderDistanceOnLine, renderPoint } from "../tools/line"

const renderCanvasGrid = (viewport, gridGraphics, lineGraphics, textGraphics, canvasConfig) => {
    gridGraphics.clear()
    lineGraphics.clear()
    textGraphics.text = ""
    const {
        gridSize,
        unit,
        lineWidth,
        showSubGrid
    } = canvasConfig
    const gridColor = "black" // Grid line color
    const gridAlpha = 0.8 // Grid line opacity

    // Calculate the effective grid size in screen space
    const effectiveGridSize = gridSize * viewport.scale.x

    const startX = viewport.x - viewport.worldWidth / 2;
    const startY = viewport.y - viewport.worldHeight / 2;

    const endX = viewport.x + viewport.worldWidth / 2;
    const endY = viewport.y + viewport.worldHeight / 2;

    // Render vertical grid lines
    for (let x = startX; x < endX; x += effectiveGridSize) {
        gridGraphics.lineStyle(1, gridColor, gridAlpha)
        gridGraphics.moveTo(x, startY)
        gridGraphics.lineTo(x, endY)
    }

    // Render horizontal grid lines
    for (let y = startY; y < endY; y += effectiveGridSize) {
        gridGraphics.lineStyle(1, gridColor, gridAlpha)
        gridGraphics.moveTo(startX, y)
        gridGraphics.lineTo(endX, y)
    }
    if (showSubGrid) {
        const subGridSize = effectiveGridSize / 5
        const subGridAlpha = 0.1
        // Render vertical grid lines
        for (let x = startX; x < endX; x += subGridSize) {
            gridGraphics.lineStyle(1, gridColor, subGridAlpha)
            gridGraphics.moveTo(x, startY)
            gridGraphics.lineTo(x, endY)
        }

        // Render horizontal grid lines
        for (let y = startY; y < endY; y += subGridSize) {
            gridGraphics.lineStyle(1, gridColor, subGridAlpha)
            gridGraphics.moveTo(startX, y)
            gridGraphics.lineTo(endX, y)
        }
    }

    if (viewport.scale.x !== 1) return;

    const initialX = viewport.x + effectiveGridSize
    const initialY = viewport.y + effectiveGridSize
    const line = {
        start: {
            x: initialX,
            y: initialY
        },
        end: {
            x: initialX + effectiveGridSize,
            y: initialY
        },
        shapeId: -1
    }

    lineGraphics.lineStyle(lineWidth, "blue", 1)
    lineGraphics.moveTo(line.start.x, line.start.y)
    lineGraphics.lineTo(line.end.x, line.end.y)
    renderPoint(lineGraphics, line.start, 5, "blue")
    renderPoint(lineGraphics, line.end, 5, "blue")

    renderDistanceOnLine(textGraphics, line, canvasConfig, viewport)
    textGraphics.text = `1${unit}`
}

export const renderCanvas = ({
    canvasWidth,
    canvasHeight,
    viewport,
    viewportContainer,
    outline,
    gridGraphics,
    zoomBtnsContainer,
    canvasMargin,
    lineGraphics,
    textGraphics,
    canvasConfig
}) => {

    renderCanvasGrid(viewport, gridGraphics, lineGraphics, textGraphics, canvasConfig)
    const maskX = 0;
    const maskY = 0;
    const maskWidth = canvasWidth - 1.5 * canvasMargin;
    const maskHeight = canvasHeight - canvasMargin;

    outline.clear();
    outline.lineStyle(1, "black");
    outline.drawRect(maskX, maskY, maskWidth, maskHeight);
    outline.endFill();
    outline.zIndex = 10

    viewportContainer.addChild(outline);

    const debugGraphics = new SmoothGraphics();
    viewport.addChild(debugGraphics);

    zoomBtnsContainer.removeChildren()
    zoomBtnsContainer = renderZoomButtons(viewport)
    zoomBtnsContainer.x = maskWidth - zoomBtnsContainer.width - canvasMargin / 2
    zoomBtnsContainer.y = 0
    zoomBtnsContainer.interactive = true

    const mask = new PIXI.Graphics();
    mask.beginFill(0xffffff);
    mask.drawRect(maskX, maskY, maskWidth, maskHeight);
    mask.endFill();

    viewport.addChild(gridGraphics);
    viewportContainer.addChild(viewport);
    viewportContainer.addChild(mask);
    viewportContainer.mask = mask
    viewportContainer.addChild(zoomBtnsContainer)
    viewportContainer.interactive = true
    return viewportContainer
}

function renderZoomButtons(viewport) {

    const zoomInSvg = <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
        <line x1="11" x2="11" y1="8" y2="14" />
        <line x1="8" x2="14" y1="11" y2="11" />
    </svg>

    const zoomOutSvg = <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
        <line x1="8" x2="14" y1="11" y2="11" />
    </svg>

    const zoomInSprite = renderSvg(ReactDOMServer.renderToStaticMarkup(zoomInSvg))
    const zoomOutSprite = renderSvg(ReactDOMServer.renderToStaticMarkup(zoomOutSvg))

    const zoomInButton = new PIXI.Container()
    const zoomOutButton = new PIXI.Container()

    const backgroundColor = "#D3D3D3"
    const backgroundGraphics1 = new SmoothGraphics();
    backgroundGraphics1.beginFill(backgroundColor);
    backgroundGraphics1.drawRect(-5, -2, 33, 30);
    backgroundGraphics1.endFill();
    const backgroundGraphics2 = new SmoothGraphics();
    backgroundGraphics2.beginFill(backgroundColor);
    backgroundGraphics2.drawRect(-5, -2, 33, 30);
    backgroundGraphics2.endFill();

    zoomInButton.addChild(backgroundGraphics1);
    zoomInButton.addChild(zoomInSprite)
    zoomOutButton.addChild(backgroundGraphics2);
    zoomOutButton.addChild(zoomOutSprite)


    zoomInButton.onpointerdown = () => {
        viewport.setZoom(viewport.scale.x * 1.1);
    }

    zoomOutButton.onpointerdown = () => {
        viewport.setZoom(viewport.scale.x / 1.1);
    }

    zoomInButton.interactive = true
    zoomOutButton.interactive = true

    zoomInButton.cursor = "pointer"
    zoomOutButton.cursor = "pointer"

    zoomInButton.x = 10
    zoomOutButton.x = 10

    zoomInButton.y = 10
    zoomOutButton.y = 10 + 35

    const zoomContainer = new PIXI.Container()
    zoomContainer.addChild(zoomInButton)
    zoomContainer.addChild(zoomOutButton)
    zoomContainer.zIndex = 10

    return zoomContainer
}
