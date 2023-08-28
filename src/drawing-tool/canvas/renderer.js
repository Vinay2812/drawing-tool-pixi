import { SmoothGraphics } from "@pixi/graphics-smooth"
import { getPixiViewport } from "./setup"
import * as PIXI from "pixi.js"
import { tools } from "../tools"
import { renderAngleBetweenLines, renderPoint } from "../tools/line"
import { findPointAtDistance, getPointerPosition, isPointerNearEdges, isPointerOutside } from "../tools/utils/calculations"
import { delay } from "../tools/utils/helpers"
import { renderSvg } from "../toolbox/renderer"
import ReactDOMServer from "react-dom/server"

export function renderCanvasGrid({ viewport, gridGraphics, config, canvasWidth, canvasHeight }) {
    if (!viewport) return
    gridGraphics.clear()
    const gridSize = config.gridSize
    const gridColor = "black" // Grid line color
    const gridAlpha = 0.8 // Grid line opacity

    // Calculate the effective grid size in screen space
    const effectiveGridSize = gridSize * viewport.scale.x

    const startX = viewport.x - viewport.worldWidth
    const startY = viewport.y - viewport.worldHeight

    // Render vertical grid lines
    for (let x = startX; x < viewport.worldWidth; x += effectiveGridSize) {
        gridGraphics.lineStyle(1, gridColor, gridAlpha)
        gridGraphics.moveTo(x, startY)
        gridGraphics.lineTo(x, viewport.worldHeight)
    }

    // Render horizontal grid lines
    for (let y = startY; y < viewport.worldHeight; y += effectiveGridSize) {
        gridGraphics.lineStyle(1, gridColor, gridAlpha)
        gridGraphics.moveTo(startX, y)
        gridGraphics.lineTo(viewport.worldWidth, y)
    }
    if (config.showSubGrid) {
        const subGridSize = effectiveGridSize / 5
        const subGridAlpha = 0.1
        // Render vertical grid lines
        for (let x = startX; x < viewport.worldWidth; x += subGridSize) {
            gridGraphics.lineStyle(1, gridColor, subGridAlpha)
            gridGraphics.moveTo(x, startY)
            gridGraphics.lineTo(x, viewport.worldHeight)
        }

        // Render horizontal grid lines
        for (let y = startY; y < viewport.worldHeight; y += subGridSize) {
            gridGraphics.lineStyle(1, gridColor, subGridAlpha)
            gridGraphics.moveTo(startX, y)
            gridGraphics.lineTo(viewport.worldWidth, y)
        }
    }
    // const initialX = startX + effectiveGridSize
    // const initialY = startY + effectiveGridSize
    // const line = {
    //     start: {
    //         x: initialX,
    //         y: initialY
    //     },
    //     end: {
    //         x: initialX + effectiveGridSize,
    //         y: initialY
    //     },
    //     shapeId: -1
    // }

    // if (viewport.scale.x < 2 && viewport.scale.y < 2) {
    //     renderGridUnit(viewport, app, line, gridGraphics, config)
    // } else {
    //     app.stage.removeChild(textGraphics)
    // }
}

// export function renderCanvasGrid({ viewport, gridGraphics, config, canvasWidth, canvasHeight }) {
//     if (!viewport) return;

//     gridGraphics.clear();
//     const gridSize = config.gridSize;
//     const gridColor = "black"; // Grid line color
//     const gridAlpha = 0.8; // Grid line opacity

//     // Calculate the effective grid size in screen space
//     const effectiveGridSize = gridSize * viewport.scale.x;

//     // Calculate the visible area of the viewport
//     const visibleArea = viewport.getVisibleBounds();

//     // Calculate the range of visible grid lines based on the visible area
//     const startX = Math.floor(visibleArea.left / effectiveGridSize) * effectiveGridSize;
//     const startY = Math.floor(visibleArea.top / effectiveGridSize) * effectiveGridSize;
//     const endX = Math.floor(visibleArea.right / effectiveGridSize) * effectiveGridSize;
//     const endY = Math.floor(visibleArea.bottom / effectiveGridSize) * effectiveGridSize;

//     // Render vertical grid lines
//     for (let x = startX; x <= endX; x += effectiveGridSize) {
//         gridGraphics.lineStyle(1, gridColor, gridAlpha);
//         gridGraphics.moveTo(x, startY);
//         gridGraphics.lineTo(x, endY);
//     }

//     // Render horizontal grid lines
//     for (let y = startY; y <= endY; y += effectiveGridSize) {
//         gridGraphics.lineStyle(1, gridColor, gridAlpha);
//         gridGraphics.moveTo(startX, y);
//         gridGraphics.lineTo(endX, y);
//     }

//     // ... Render subgrid lines and additional logic if needed ...
// }

const startPoint = {
    current: null
}
const setStartPoint = (point) => {
    startPoint.current = point
};

const isDrawing = {
    current: false
}

const selectedPoint = {
    current: null
}
const setSelectedPoint = (point) => (selectedPoint.current = point);

const pencilPointsRef = {
    current: []
}
const gridGraphics = new SmoothGraphics();
const viewportContainer = new PIXI.Container();
const outline = new SmoothGraphics();
let zoomBtnsContainer = new PIXI.Container();

export const renderCanvas = ({
    canvasWidth,
    canvasHeight,
    canvasMargin,
    appEvents,
    drawingItems,
    setDrawingItems,
    graphicsStoreRef,
    pointNumberRef,
    viewportRef,
    canvasConfig,
    activeTool,
    canvasContainer,
    defaultDrawingItems,
    toolboxHeight,
}) => {
    const viewport = getPixiViewport(appEvents, canvasWidth, canvasHeight, viewportContainer, appEvents)
    const setIsDrawing = (val) => {
        isDrawing.current = val;
        if (viewportContainer && zoomBtnsContainer) {
            if (val === true) {
                viewportContainer.removeChild(zoomBtnsContainer)
            }
            else {
                viewportContainer.addChild(zoomBtnsContainer)
            }
        }
    };
    // viewportContainer.mask = null;
    outline.clear();
    outline.lineStyle(1, "black");
    outline.drawRect(0, 0, canvasWidth, canvasHeight);
    outline.endFill();
    outline.zIndex = 10

    viewportContainer.addChild(outline);

    if (activeTool === "select") {
        viewport.plugins.resume("drag");
    } else {
        viewport.plugins.pause("drag");
    }
    gridGraphics.clear();
    const debugGraphics = new SmoothGraphics();
    // renderPoint(debugGraphics, viewport.center, 5, "green")
    viewport.addChild(debugGraphics);

    const canvasGridProps = { viewport, gridGraphics, config: canvasConfig, canvasWidth, canvasHeight }
    viewport.on("moved", () => {
        gridGraphics.clear();
        renderCanvasGrid(canvasGridProps);
    });

    renderCanvasGrid(canvasGridProps)
    renderDrawingItems(defaultDrawingItems, false);
    renderDrawingItems(drawingItems);

    function getProps() {
        return {
            startPoint: startPoint.current,
            isDrawing: isDrawing.current,
            viewport,
            graphicsStoreRef,
            selectedPoint: selectedPoint.current,
            setDrawingItems,
            setStartPoint,
            setSelectedPoint,
            setIsDrawing,
            pointNumberRef,
            pencilPointsRef,
            shapes: drawingItems.reduce((data, item) => {
                if (!data[item.type]) {
                    data[item.type] = [];
                }
                data[item.type].push(item.data);
                return data;
            }, {}),
            canvasConfig,
            drawingItems,
            canvasContainer
        };
    }

    async function handlePointNearEdge(e) {
        let touchingEdge = isPointerNearEdges(
            e,
            canvasContainer,
            canvasConfig.gridSize,
            canvasWidth,
            canvasHeight,
        );
        let outsideContainer = isPointerOutside(e, canvasContainer);

        while (touchingEdge && !outsideContainer) {
            const endPoint = getPointerPosition(
                e,
                viewport,
                canvasContainer,
            );
            const start = startPoint.current;
            const line = {
                start: start,
                end: endPoint,
                shapeId: -1,
            };
            if (!start || !endPoint) {
                break;
            }

            const travelDistance = canvasConfig.gridSize * 0.1;

            const shift = findPointAtDistance(line, travelDistance);
            const deltaX = start.x - shift.x;
            const deltaY = start.y - shift.y;

            const newCenter = {
                x: viewport.center.x - deltaX,
                y: viewport.center.y - deltaY,
            };

            // Update the viewport's center position
            viewport.moveCenter(newCenter.x, newCenter.y);
            gridGraphics.clear();
            renderCanvasGrid({
                viewport,
                gridGraphics,
                config: canvasConfig,
                canvasWidth,
                canvasHeight,
            });

            // Wait for a short delay
            await delay(100);

            // Update edge status
            touchingEdge = isPointerNearEdges(
                e,
                canvasContainer,
                canvasConfig.gridSize,
                canvasWidth,
                canvasHeight,
            );
            outsideContainer = isPointerOutside(e, canvasContainer, -5);

            if (outsideContainer) {
                const props = getProps();
                return tools[activeTool].events.onUp(e, props);
            }

            const props = getProps();
            tools[activeTool].events.onMove(e, props);
        }
    }

    async function handleOnMove(e) {
        if (startPoint.current) {
            await handlePointNearEdge(e);
        }
        if (!isDrawing.current) return;
        const props = getProps();
        return tools[activeTool].events.onMove(e, props);
    }

    function handleOnDown(e) {
        // const rec = canvasContainer.getBoundingClientRect();
        // console.log(e)
        // // const p = new PIXI.Point(e.clientX - rec.x + canvasContainer.scrollLeft, e.clientY - rec.y + canvasContainer.scrollTop);
        // // const point = viewport.toWorld(p);
        // // renderPoint(debugGraphics, point, 5, "green")
        // // renderPoint(debugGraphics, p, 5, "red")
        // // const {x, y} = viewportContainer.getBounds()
        // const p = new PIXI.Point(e.global.x - rec.left, e.global.x - rec.top);
        // const point = viewport.toGlobal(p);
        // console.log("pointe", e.global.x, e.global.y, p.x, p.y, point.x, point.y)
        // renderPoint(debugGraphics, point, 5, "green")
        // renderPoint(debugGraphics, p, 5, "red")
        const props = getProps();
        return tools[activeTool].events.onDown(e, props);
    }

    function handleOnUp(e) {
        const props = getProps();
        tools[activeTool].events.onUp(e, props);
    }


    viewport.addEventListener("pointermove", handleOnMove);
    viewport.addEventListener("pointerdown", handleOnDown);
    viewport.addEventListener("pointerup", handleOnUp);
    viewport.addEventListener("pointerout", handleOnUp);



    function renderDrawingItems(drawingItems, editable = true) {
        drawingItems.forEach((item) => {
            const renderer = tools[item.type].renderer;
            renderer(
                item.data,
                viewport,
                graphicsStoreRef,
                canvasConfig,
                editable,
            );
        });
        renderAngleBetweenLines(
            (drawingItems)
                .filter((item) => item.type === "line")
                .map((item) => item.data),
            viewport,
            graphicsStoreRef,
            pointNumberRef,
            canvasConfig,
            editable,
        );
    }


    zoomBtnsContainer.removeChildren()
    zoomBtnsContainer = renderZoomButtons(viewport)
    zoomBtnsContainer.x = canvasWidth - 60
    zoomBtnsContainer.y = canvasMargin

    const mask = new PIXI.Graphics();
    mask.beginFill(0xffffff);
    mask.drawRect(0, 0, canvasWidth, canvasHeight);
    mask.endFill();

    viewport.addChild(gridGraphics);
    viewportContainer.addChild(viewport);
    viewportContainer.addChild(mask);
    viewportContainer.mask = mask
    viewportContainer.addChild(zoomBtnsContainer)
    viewportRef.current = viewport;

    return viewportContainer
}

export function renderZoomButtons(viewport) {
    const maxZoomPercent = 4;
    const minZoomPercent = 0.5;

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
        const newScale = Math.min(
            viewport.scale.x * 1.2,
            maxZoomPercent,
        );
        viewport.setZoom(newScale);
    }

    zoomOutButton.onpointerdown = () => {
        const newScale = Math.max(
            viewport.scale.x / 1.2,
            minZoomPercent,
        );
        viewport.setZoom(newScale);
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
    zoomBtnsContainer.interactive = true
    return zoomContainer
}
