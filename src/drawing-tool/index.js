import { isMobile } from "./tools/utils/config";
import { renderCanvas } from "./canvas/renderer";
import { renderToolbox } from "./toolbox/renderer";
import * as PIXI from "pixi.js";
import { SmoothGraphics } from "@pixi/graphics-smooth";
import { Viewport } from "pixi-viewport";
import { ShapeAnalyzer } from "./shape";
import { getDistance } from "./tools/utils/calculations";

export class DrawingTool {
    constructor({
        canvasWidth,
        canvasHeight,
        app,
        pixiContainer,
        gridSize = 50,
        showSubGrid = false,
        hiddenTools = [],
        defaultDrawingItems = [],
        lineWidth = 5,
        unit = "cm",
        canvasContainerId,
    }) {
        this.app = app;
        this.pixiContainer = pixiContainer;
        this.gridSize = gridSize;
        this.showSubGrid = showSubGrid;
        this.hiddenTools = hiddenTools;
        this.defaultDrawingItems = defaultDrawingItems;
        this.lineWidth = lineWidth;
        this.unit = unit;
        this.canvasContainerId = canvasContainerId;
        this.canvasContainer = document.getElementById(canvasContainerId);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.canvasMargin = 20;
        this.toolboxHeight = 50;
        this.canvasConfig = {
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
        };

        // containers
        this.toolboxContainer = new PIXI.Container();
        this.viewportContainer = new PIXI.Container();
        this.viewport = this.#getPixiViewport();
        this.zoomBtnsContainer = new PIXI.Container()

        //graphics
        this.gridGraphics = new SmoothGraphics();
        this.outline = new SmoothGraphics();
        this.lineGraphics = new SmoothGraphics();
        this.textGraphics = new PIXI.Text("", this.canvasConfig.textGraphicsOptions);
        // states
        this.drawingItems = [];
        this.undoItems = [];
        this.activeTool = "select";

        // refs
        this.graphicsStoreRef = {
            current: {}
        }
        this.pointNumberRef = {
            current: 0
        }
        this.startPoint = {
            current: null
        }
        this.selectedPoint = {
            current: null
        }
        this.pencilPointsRef = {
            current: []
        }
        this.isDrawing = {
            current: false
        }
    }

    #getPixiViewport = () => {
        const viewport = new Viewport({
            worldWidth: 10000,
            worldHeight: 10000,
            screenWidth: this.canvasWidth,
            screenHeight: this.canvasHeight - 50,
            events: this.app.renderer.events,
            interaction: this.app.renderer.plugins.interaction,
            ticker: this.app.ticker,
        })
            .pinch({
                noDrag: true,
                factor: 1,
                percent: 2,
                axis: "all",
            })
            .wheel()
            .drag({
                wheel: false,
                underflow: "center",
            }).decelerate({
                bounce: 0
            });
        if (viewport) {
            this.viewportContainer.removeChild(viewport)
        }
        viewport.interactive = true;
        return viewport;
    }

    #setIsDrawing = (isDrawing) => {
        this.isDrawing.current = isDrawing;
    }

    #setStartPoint = (point) => {
        this.startPoint.current = point;
    }
    #setSelectedPoint = (point) => {
        this.selectedPoint.current = point;
    }

    #setActiveTool = (tool) => {
        this.activeTool = tool;
        this.#reRenderToolbox();
        this.#reRenderCanvas()
    }

    #setDrawingItems = (items) => {
        this.drawingItems = items;
        this.undoItems = []
        this.#reRenderToolbox();
        this.#reRenderCanvas()
    }

    #setUndoItems = (items) => {
        this.undoItems = items;
        this.#reRenderToolbox();
        this.#reRenderCanvas()
    }

    #reRenderCanvas = () => {
        if (this.viewportContainer) {
            this.pixiContainer.removeChild(this.viewportContainer);
            this.viewportContainer = renderCanvas({
                ...this,
                setActiveTool: this.#setActiveTool,
                setDrawingItems: this.#setDrawingItems,
                setUndoItems: this.#setUndoItems,
                setStartPoint: this.#setStartPoint,
                setSelectedPoint: this.#setSelectedPoint,
                setIsDrawing: this.#setIsDrawing,
            })
            this.viewportContainer.y = this.toolboxHeight + this.canvasMargin;
            this.viewportContainer.x = this.canvasMargin;
            this.pixiContainer.addChild(this.viewportContainer);
        }
    }

    #reRenderToolbox = () => {
        let prevToolboxContainer;
        if (this.toolboxContainer) {
            prevToolboxContainer = this.toolboxContainer;
        }
        this.toolboxContainer = renderToolbox({
            ...this,
            setActiveTool: this.#setActiveTool,
            setDrawingItems: this.#setDrawingItems,
            setUndoItems: this.#setUndoItems,
            setStartPoint: this.#setStartPoint,
            setSelectedPoint: this.#setSelectedPoint,
            setIsDrawing: this.#setIsDrawing
        });
        this.toolboxContainer.y = this.canvasMargin;
        this.toolboxContainer.x = 1.5 * this.canvasMargin;
        this.pixiContainer.addChild(this.toolboxContainer);
        if (prevToolboxContainer) {
            this.pixiContainer.removeChild(prevToolboxContainer);
        }
    }

    getShapeData = () => {
        const lines = this.drawingItems
            .filter((item) => item.type === "line")
            .map((item) => item.data);
        const shapeAnalyzer = new ShapeAnalyzer()
        const shapeFromLinesData = shapeAnalyzer.getShapeData(lines, this.gridSize)
        const circles = this.drawingItems
            .filter(({ type }) => type === "circle")
            .map((item) => {
                const circleData = item.data;
                return {
                    type: "circle",
                    data: {
                        start: circleData.start,
                        end: circleData.end,
                        radius: getDistance(circleData.start, circleData.end),
                        shapeId: circleData.shapeId,
                    },
                };
            });
        return [...shapeFromLinesData, ...circles];
    }

    render = () => {
        this.viewport.addChild(this.lineGraphics);
        this.viewport.addChild(this.textGraphics);
        this.#reRenderToolbox();
        this.#reRenderCanvas();
    }

}