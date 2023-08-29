import { isMobile } from "./tools/utils/config";
import { renderCanvas } from "./canvas/renderer";
import { renderToolbox } from "./toolbox/renderer";
import * as PIXI from "pixi.js";
import { SmoothGraphics } from "@pixi/graphics-smooth";
import { Viewport } from "pixi-viewport";
import { ShapeAnalyzer } from "./shape";
import { findPointAtDistance, getDistance, getPointerPosition, isPointerNearEdges, isPointerOutside } from "./tools/utils/calculations";
import { renderPoint } from "./tools/line";
import { tools } from "./tools";
import { delay } from "./tools/utils/helpers";
// import Toolbox from "./toolbox";

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
        // viewport
        this.viewport = this.#getPixiViewport();

        // containers
        this.viewportContainer = new PIXI.Container();
        this.zoomBtnsContainer = new PIXI.Container()
        this.toolboxContainer = new PIXI.Container();
        this.leftToolsContainer = new PIXI.Container()
        this.rightToolsContainer = new PIXI.Container()

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
        this.leftTools = Object.entries(tools).filter(([_, tool]) => {
            return tool.isLeft && !this.hiddenTools.includes(tool.name)
        })
        this.rightTools = Object.entries(tools).filter(([_, tool]) => {
            return !tool.isLeft && !this.hiddenTools.includes(tool.name)
        })
    }

    #getPixiViewport = () => {
        const viewport = new Viewport({
            worldWidth: 100000,
            worldHeight: 100000,
            screenWidth: this.canvasWidth,
            screenHeight: this.canvasHeight,
            events: this.app.renderer.events,
            // interaction: this.app.renderer.plugins.interaction,
            // ticker: this.app.ticker,
        })
            .pinch({
                noDrag: true,
                factor: 1,
                percent: 1,
                axis: "all",
            })
            .wheel()
            .drag({
                wheel: false,
                factor: isMobile() ? 2 : 1
            }).decelerate();
        // viewport.interactive = true;
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
        // this.#removeEventListeners()
        this.activeTool = tool;
        this.#addEventListeners();
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

    // Event listeners
    #getPointerEventProps() {
        return {
            startPoint: this.startPoint.current,
            isDrawing: this.isDrawing.current,
            viewport: this.viewport,
            graphicsStoreRef: this.graphicsStoreRef,
            selectedPoint: this.selectedPoint.current,
            setDrawingItems: this.#setDrawingItems,
            setStartPoint: this.#setStartPoint,
            setSelectedPoint: this.#setSelectedPoint,
            setIsDrawing: this.#setIsDrawing,
            pointNumberRef: this.pointNumberRef,
            pencilPointsRef: this.pencilPointsRef,
            shapes: this.drawingItems.reduce((data, item) => {
                if (!data[item.type]) {
                    data[item.type] = [];
                }
                data[item.type].push(item.data);
                return data;
            }, {}),
            canvasConfig: this.canvasConfig,
            drawingItems: this.drawingItems,
        };
    }

    #handlePointNearEdge = async (e) => {

        let touchingEdge = isPointerNearEdges(
            e,
            this.canvasContainer,
            this.gridSize,
            this.canvasWidth,
            this.canvasHeight,
            this.toolboxHeight,
            this.canvasMargin
        );
        // let outsideContainer = isPointerOutside(e, this.canvasContainer);
        if (touchingEdge) {
            await delay(100)
            touchingEdge = isPointerNearEdges(
                e,
                this.canvasContainer,
                this.canvasConfig.gridSize,
                this.canvasWidth,
                this.canvasHeight,
                this.toolboxHeight,
                this.canvasMargin
            );
        }
        while (touchingEdge) {
            const endPoint = getPointerPosition(
                e,
                this.viewport,
            );
            const start = this.startPoint.current;
            const line = {
                start: start,
                end: endPoint,
                shapeId: -1,
            };
            if (!start || !endPoint) {
                return;
            }

            const travelDistance = this.canvasConfig.gridSize * 0.05 / this.viewport.scale.x;

            const shift = findPointAtDistance(line, travelDistance);
            const deltaX = start.x - shift.x;
            const deltaY = start.y - shift.y;

            const newCenter = {
                x: this.viewport.center.x - deltaX,
                y: this.viewport.center.y - deltaY,
            };
            this.viewport.moveCenter(newCenter.x, newCenter.y);
            await delay(100);

            // Update edge status
            touchingEdge = isPointerNearEdges(
                e,
                this.canvasContainer,
                this.canvasConfig.gridSize,
                this.canvasWidth,
                this.canvasHeight,
                this.toolboxHeight,
                this.canvasMargin
            );
            // outsideContainer = isPointerOutside(e, this.canvasContainer, -5);

            // if (outsideContainer) {
            //     const props = this.#getPointerEventProps();
            //     return tools[this.activeTool].events.onUp(e, props);
            // }

            const props = this.#getPointerEventProps();
            tools[this.activeTool].events.onMove(e, props);
        }

        // const props = this.#getPointerEventProps();
        // tools[this.activeTool].events.onUp(e, props);
    }

    #handleOnMove = async (e) => {
        if (this.startPoint.current) {
            await this.#handlePointNearEdge(e);
        }
        if (!this.isDrawing.current) return;
        const props = this.#getPointerEventProps();
        return tools[this.activeTool].events.onMove(e, props);
    }

    #handleOnDown = (e) => {
        const props = this.#getPointerEventProps();
        return tools[this.activeTool].events.onDown(e, props);
    }

    #handleOnUp = (e) => {
        const props = this.#getPointerEventProps();
        tools[this.activeTool].events.onUp(e, props);
    }

    #handleOnOutside = (e) => {
        this.#handleOnUp(e)
    }


    #renderCanvasGrid = () => {
        this.gridGraphics.clear()
        this.lineGraphics.clear()
        this.textGraphics.text = ""
        const gridSize = this.gridSize
        const gridColor = "black" // Grid line color
        const gridAlpha = 0.8 // Grid line opacity

        // Calculate the effective grid size in screen space
        const effectiveGridSize = gridSize * this.viewport.scale.x

        const startX = this.viewport.x - this.viewport.worldWidth / 2;
        const startY = this.viewport.y - this.viewport.worldHeight / 2;

        const endX = this.viewport.x + this.viewport.worldWidth / 2;
        const endY = this.viewport.y + this.viewport.worldHeight / 2;

        // Render vertical grid lines
        for (let x = startX; x < endX; x += effectiveGridSize) {
            this.gridGraphics.lineStyle(1, gridColor, gridAlpha)
            this.gridGraphics.moveTo(x, startY)
            this.gridGraphics.lineTo(x, endY)
        }

        // Render horizontal grid lines
        for (let y = startY; y < endY; y += effectiveGridSize) {
            this.gridGraphics.lineStyle(1, gridColor, gridAlpha)
            this.gridGraphics.moveTo(startX, y)
            this.gridGraphics.lineTo(endX, y)
        }
        if (this.showSubGrid) {
            const subGridSize = effectiveGridSize / 5
            const subGridAlpha = 0.1
            // Render vertical grid lines
            for (let x = startX; x < endX; x += subGridSize) {
                this.gridGraphics.lineStyle(1, gridColor, subGridAlpha)
                this.gridGraphics.moveTo(x, startY)
                this.gridGraphics.lineTo(x, endY)
            }

            // Render horizontal grid lines
            for (let y = startY; y < endY; y += subGridSize) {
                this.gridGraphics.lineStyle(1, gridColor, subGridAlpha)
                this.gridGraphics.moveTo(startX, y)
                this.gridGraphics.lineTo(endX, y)
            }
        }

        if (this.viewport.scale.x !== 1) return;

        const initialX = this.viewport.x + effectiveGridSize
        const initialY = this.viewport.y + effectiveGridSize
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

        this.lineGraphics.lineStyle(this.lineWidth, "blue", 1)
        this.lineGraphics.moveTo(line.start.x, line.start.y)
        this.lineGraphics.lineTo(line.end.x, line.end.y)
        renderPoint(this.lineGraphics, line.start, 5, "blue")
        renderPoint(this.lineGraphics, line.end, 5, "blue")

        this.textGraphics.x = line.start.x + 15 * this.viewport.scale.x
        this.textGraphics.y = line.start.y - 15 * this.viewport.scale.x
        this.textGraphics.text = `1${this.unit}`
    }

    #reRenderCanvas = () => {
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
        this.viewportContainer.y = this.toolboxHeight + this.canvasMargin / 2;
        this.viewportContainer.x = this.canvasMargin / 2;
        // this.#renderCanvasGrid()
        this.pixiContainer.addChild(this.viewportContainer);
    }

    #reRenderToolbox = () => {
        if (this.toolboxContainer.children.length) {
            this.leftToolsContainer.removeChildren();
            this.rightToolsContainer.removeChildren();
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
        this.toolboxContainer.x = this.canvasMargin;
        this.pixiContainer.addChild(this.toolboxContainer);
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

    #addEventListeners = () => {
        this.viewport.addEventListener("pointermove", this.#handleOnMove);
        this.viewport.addEventListener("pointerdown", this.#handleOnDown);
        this.viewport.addEventListener("pointerup", this.#handleOnUp);
        this.viewport.addEventListener("pointerupoutside", this.#handleOnOutside);
    }

    #removeEventListeners = () => {
        this.viewport.removeEventListener("pointermove", this.#handleOnMove);
        this.viewport.removeEventListener("pointerdown", this.#handleOnDown);
        this.viewport.removeEventListener("pointerup", this.#handleOnUp);
        this.viewport.removeEventListener("pointerupoutside", this.#handleOnOutside);
    }

    render = () => {
        this.#addEventListeners();
        this.viewport.addChild(this.lineGraphics);
        this.viewport.addChild(this.textGraphics);
        this.#reRenderToolbox();
        this.#reRenderCanvas();
        this.#renderCanvasGrid()

        this.viewport.on("zoomed", () => {
            this.gridGraphics.resolution = 1 + this.viewport.scale.x
            this.lineGraphics.resolution = 1 + this.viewport.scale.x
            this.textGraphics.resolution = 1 + this.viewport.scale.x
            Object.keys(this.graphicsStoreRef.current).forEach((key) => {
                this.graphicsStoreRef.current[key].forEach(g => {
                    g.resolution = 1 + this.viewport.scale.x
                })
            })
        })

        this.viewport.on("pinch-start", () => {
            this.startPoint.current = null;
            this.isDrawing.current = false;
            this.pencilPointsRef.current = [];
            this.viewport.moveCenter(this.viewport.center.x, this.viewport.center.y)

        })
    }

    destroy = () => {
        this.#removeEventListeners();
        this.viewport.destroy();
        this.viewportContainer.destroy();
        this.pixiContainer.destroy();
    }

}