import { SmoothGraphics } from "@pixi/graphics-smooth"
import * as PIXI from "pixi.js"
import { tools } from "../tools"
import { renderAngleBetweenLines } from "../tools/line"
import { findPointAtDistance, getPointerPosition, isPointerNearEdges, isPointerOutside } from "../tools/utils/calculations"
import { delay } from "../tools/utils/helpers"
import { renderSvg } from "../toolbox/renderer"
import ReactDOMServer from "react-dom/server"

export const renderCanvas = ({
    canvasWidth,
    canvasHeight,
    canvasMargin,
    canvasContainer,
    app,
    drawingItems,
    setDrawingItems,
    graphicsStoreRef,
    pointNumberRef,
    canvasConfig,
    activeTool,
    defaultDrawingItems,
    viewport,
    setStartPoint,
    setSelectedPoint,
    setIsDrawing,
    pencilPointsRef,
    viewportContainer,
    outline,
    gridGraphics,
    startPoint,
    selectedPoint,
    isDrawing,
    zoomBtnsContainer,
}) => {
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
    const debugGraphics = new SmoothGraphics();
    viewport.addChild(debugGraphics);
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
        if (touchingEdge) {
            await delay(100)
            touchingEdge = isPointerNearEdges(
                e,
                canvasContainer,
                canvasConfig.gridSize,
                canvasWidth,
                canvasHeight,
            );
        }
        while (touchingEdge && !outsideContainer) {
            const endPoint = getPointerPosition(
                e,
                viewport,
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

            const travelDistance = canvasConfig.gridSize * 0.05;

            const shift = findPointAtDistance(line, travelDistance);
            const deltaX = start.x - shift.x;
            const deltaY = start.y - shift.y;

            const newCenter = {
                x: viewport.center.x - deltaX,
                y: viewport.center.y - deltaY,
            };
            viewport.moveCenter(newCenter.x, newCenter.y);
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
        app.renderer.view.style.touchAction = "none";
        const props = getProps();
        return tools[activeTool].events.onDown(e, props);
    }

    function handleOnUp(e) {
        const props = getProps();
        tools[activeTool].events.onUp(e, props);
        app.renderer.view.style.touchAction = "auto";
    }

    viewport.onpointerdown = handleOnDown
    viewport.onpointerup = handleOnUp
    viewport.onpointermove = handleOnMove
    viewport.onpointerout = handleOnUp

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
    zoomBtnsContainer.y = 0
    zoomBtnsContainer.interactive = true

    const mask = new PIXI.Graphics();
    mask.beginFill(0xffffff);
    mask.drawRect(0, 0, canvasWidth, canvasHeight);
    mask.endFill();

    viewport.addChild(gridGraphics);
    viewportContainer.addChild(viewport);
    viewportContainer.addChild(mask);
    viewportContainer.mask = mask
    viewportContainer.addChild(zoomBtnsContainer)

    return viewportContainer
}

export function renderZoomButtons(viewport) {

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
        // renderCanvasGrid();
    }

    zoomOutButton.onpointerdown = () => {
        viewport.setZoom(viewport.scale.x / 1.1);
        // renderCanvasGrid();
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
    // zoomBtnsContainer.interactive = true
    return zoomContainer
}
