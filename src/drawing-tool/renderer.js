import * as PIXI from "pixi.js";
import { renderToolbox } from "./toolbox/renderer"
import { renderCanvas } from "./canvas/renderer";
import { isMobile } from "./tools/utils/config";
import { delay } from "./tools/utils/helpers";

let toolboxContainer, viewportContainer;
const graphicsStoreRef = {
    current: {}
}
const pointNumberRef = {
    current: 0
}
const viewportRef = {
    current: null
}

export async function renderDrawingTool({
    canvasWidth,
    canvasHeight,
    appEvents,
    pixiContainer,
    gridSize = 50,
    showSubGrid = false,
    hiddenTools = [],
    defaultDrawingItems = [],
    lineWidth = 5,
    unit = "cm",
    canvasContainerId,
}) {
    if (toolboxContainer) {
        pixiContainer.removeChild(toolboxContainer);
    }
    if (viewportContainer) {
        pixiContainer.removeChild(viewportContainer);
    }
    let drawingItems = [];
    let undoItems = [];
    let activeTool = "select";
    let toolboxHeight = 50;
    const canvasMargin = 20;

    const canvasContainer = document.getElementById(canvasContainerId);
    function rerenderCanvas(updateEventListeners = false) {
        if (viewportContainer) {
            pixiContainer.removeChild(viewportContainer);
        }
        viewportContainer = renderCanvas({
            canvasWidth,
            canvasHeight,
            appEvents,
            drawingItems,
            setDrawingItems,
            undoItems,
            setUndoItems,
            graphicsStoreRef,
            pointNumberRef,
            viewportRef,
            canvasConfig,
            activeTool,
            updateEventListeners,
            canvasContainer,
            toolboxHeight,
            canvasMargin,
            defaultDrawingItems
        })
        // if (toolboxContainer) {
        // const mask = new PIXI.Graphics();
        // mask.beginFill(0xffffff);
        // mask.drawRect(canvasMargin, toolboxHeight + canvasMargin, canvasWidth, canvasHeight);
        // mask.endFill();
        // viewportContainer.mask = mask;
        // }
        viewportContainer.y = toolboxHeight + canvasMargin;
        viewportContainer.x = canvasMargin;
        pixiContainer.addChild(viewportContainer);
    }

    async function rerenderToolbox() {
        let prevToolboxContainer;
        if (toolboxContainer) {
            prevToolboxContainer = toolboxContainer;
        }
        toolboxContainer = renderToolbox({
            activeTool,
            setActiveTool,
            drawingItems,
            setDrawingItems,
            undoItems,
            setUndoItems,
            graphicsStoreRef,
            pointNumberRef,
            viewportRef,
            hiddenTools,
            canvasWidth,
            canvasHeight,
            toolboxHeight,
            canvasMargin,
        });
        toolboxContainer.y = canvasMargin;
        toolboxContainer.x = 1.5 * canvasMargin;
        pixiContainer.addChild(toolboxContainer);
        if (prevToolboxContainer) {
            await delay(50)
            pixiContainer.removeChild(prevToolboxContainer);
        }
    }

    const canvasConfig = {
        gridSize,
        lineWidth,
        textGraphicsOptions: {
            fill: "#000",
            fontWeight: "600",
            fontSize:
                Math.sqrt(gridSize + lineWidth) /
                (isMobile() ? 0.7 : 40) +
                ((35 - 20) * (window.innerWidth - 320)) / (1920 - 320),
        },
        unit,
        showSubGrid,
    }
    const setActiveTool = (toolName) => {
        activeTool = toolName;
        rerenderToolbox()
        rerenderCanvas()
    };
    const setUndoItems = (items) => {
        undoItems = items
        rerenderCanvas()
        rerenderToolbox()
    };
    const setDrawingItems = (items) => {
        drawingItems = items
        undoItems = []
        rerenderCanvas()
        rerenderToolbox()
    };

    await rerenderToolbox()
    rerenderCanvas()
    pixiContainer.interactive = true;
    return pixiContainer;
}