import * as PIXI from "pixi.js";
import { tools } from "../tools";
import ReactDOMServer from "react-dom/server";
import { SmoothGraphics } from "@pixi/graphics-smooth";

class Toolbox {
    constructor({
        activeTool,
        setActiveTool,
        drawingItems,
        setDrawingItems,
        undoItems,
        setUndoItems,
        graphicsStoreRef,
        pointNumberRef,
        viewport,
        hiddenTools,
        toolboxHeight,
        canvasMargin,
    }) {
        this.activeTool = activeTool;
        this.setActiveTool = setActiveTool;
        this.drawingItems = drawingItems;
        this.setDrawingItems = setDrawingItems;
        this.undoItems = undoItems;
        this.setUndoItems = setUndoItems;
        this.graphicsStoreRef = graphicsStoreRef;
        this.pointNumberRef = pointNumberRef;
        this.viewport = viewport;
        this.hiddenTools = hiddenTools;
        this.toolboxHeight = toolboxHeight;
        this.canvasMargin = canvasMargin;

        this.iconGap = 45;
        this.toolboxContainer = new PIXI.Container();
        this.leftToolsContainer = new PIXI.Container();
        this.rightToolsContainer = new PIXI.Container();

        this.toolboxContainer.height = this.toolboxHeight;
        this.toolboxContainer.y = 10;
        this.toolboxContainer.cursor = "pointer";

        this.rightToolsContainer.x = this.canvasMargin / 1.5;

        this.leftTools = Object.entries(tools).filter(([_, tool]) => {
            return tool.isLeft && !this.hiddenTools.includes(tool.name)
        })
        this.rightTools = Object.entries(tools).filter(([_, tool]) => {
            return !tool.isLeft && !this.hiddenTools.includes(tool.name)
        })
        this.leftToolsButtons = {};
        this.rightToolsButtons = {};
        this.#setToolboxButtons();
        this.iconGap = 45;
    }

    isToolDisabled(toolName) {
        if (this.drawingItems.length === 0 && this.undoItems.length === 0) return true;
        if (toolName === "redo") return this.undoItems.length === 0;
        return this.drawingItems.length === 0;
    }

    #getSvgSprite = (Icon) => {
        const svg = ReactDOMServer.renderToString(Icon);
        const blob = new Blob([svg], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const texture = PIXI.Texture.from(url);
        const svgSprite = new PIXI.Sprite(texture);
        return svgSprite;
    }

    #getSvgButton = (Icon, outlineReq = true) => {
        const svgSprite = this.#getSvgSprite(Icon);
        const button = new PIXI.Container();
        button.interactive = true;
        button.buttonMode = true;
        button.interactive =
            button.addChild(svgSprite);
        if (!outlineReq) return button;
        const outline = new SmoothGraphics();
        outline.lineStyle(1, "black", 0.6);
        outline.drawRect(-this.iconGap / 4, -3, this.iconGap, this.toolboxHeight - this.canvasMargin + 2);
        outline.endFill();
        button.addChild(outline);
        return button;
    }

    #setToolboxButtons = () => {
        let xOffset = 0;
        const props = {
            activeTool: this.activeTool,
            setActiveTool: this.setActiveTool,
            drawingItems: this.drawingItems,
            setDrawingItems: this.setDrawingItems,
            undoItems: this.undoItems,
            setUndoItems: this.setUndoItems,
            graphicsStoreRef: this.graphicsStoreRef,
            pointNumberRef: this.pointNumberRef,
            viewport: this.viewport,
            hiddenTools: this.hiddenTools,
        }
        this.leftTools.forEach(([_, tool]) => {
            const Icon = tool.Icon
            const button = this.#getSvgButton(<Icon />, true);
            const buttonContainer = new PIXI.Container();
            buttonContainer.cursor = "pointer";
            buttonContainer.addChild(button);
            buttonContainer.x = xOffset;
            xOffset += this.iconGap;
            buttonContainer.onpointerdown = () => { tools[tool.name].onClick(props); }
            this.leftToolsButtons[tool.name] = buttonContainer
        })

        this.rightTools.forEach(([_, tool]) => {
            const button = this.#getSvgButton(tool.Icon, false);
            const buttonContainer = new PIXI.Container();
            buttonContainer.cursor = "pointer";
            buttonContainer.addChild(button);
            buttonContainer.x = xOffset;
            xOffset += this.iconGap;
            buttonContainer.onpointerdown = () => { tools[tool.name].onClick(props); }
            this.rightToolsButtons[tool.name] = buttonContainer
        })
    }

    // render({
    //     activeTool,
    //     drawingItems,
    //     undoItems,

    // }) {
    //     if (this.activeTool !== activeTool) {
            
    //     }

    //     if (this.drawingItems.length !== drawingItems.length
    //         || this.undoItems.length !== undoItems.length) {

    //     }
    //     return this.toolboxContainer;
    // }

}

export default Toolbox;
