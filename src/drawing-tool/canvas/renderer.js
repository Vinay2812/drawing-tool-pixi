import { SmoothGraphics } from "@pixi/graphics-smooth"
import * as PIXI from "pixi.js"
import { tools } from "../tools"
import { renderAngleBetweenLines } from "../tools/line"
import { renderSvg } from "../toolbox/renderer"
import ReactDOMServer from "react-dom/server"

export const renderCanvas = ({
    canvasWidth,
    canvasHeight,
    drawingItems,
    graphicsStoreRef,
    pointNumberRef,
    canvasConfig,
    activeTool,
    defaultDrawingItems,
    viewport,
    viewportContainer,
    outline,
    gridGraphics,
    zoomBtnsContainer,
    canvasMargin,
}) => {

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

    if (activeTool === "select") {
        viewport.plugins.resume("drag");
    } else {
        viewport.plugins.pause("drag");
    }
    const debugGraphics = new SmoothGraphics();
    viewport.addChild(debugGraphics);
    renderDrawingItems(defaultDrawingItems, false);
    renderDrawingItems(drawingItems);

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
