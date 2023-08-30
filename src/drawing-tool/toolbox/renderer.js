import * as PIXI from "pixi.js"
import { tools } from "../tools"
import ReactDOMServer from "react-dom/server"
import { SmoothGraphics } from "@pixi/graphics-smooth"

export function renderSvg(svg) {
    const blob = new Blob([svg], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    const texture = PIXI.Texture.from(url)
    const svgSprite = new PIXI.Sprite(texture)
    return svgSprite
}

export function renderToolbox({
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
    toolboxContainer,
    leftToolsContainer,
    rightToolsContainer,
    leftTools,
    rightTools
}) {
    const props = {
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
    }

    const iconGap = toolboxHeight - 10;
    toolboxContainer.height = toolboxHeight

    toolboxContainer.addChild(leftToolsContainer)
    toolboxContainer.addChild(rightToolsContainer)

    let xOffset = 0 // Initial X position for the buttons
    toolboxContainer.cursor = "pointer"

    rightToolsContainer.x = canvasMargin / 1.5;

    function isToolDisabled(toolName) {
        if (drawingItems.length === 0 && undoItems.length === 0) return true
        if (toolName === "redo") return undoItems.length === 0
        return drawingItems.length === 0
    }

    leftTools.forEach(([toolName, tool], idx) => {
        const button = new PIXI.Container();
        const backgroundGraphics = new SmoothGraphics();
        const outline = new SmoothGraphics();
        const buttonContainer = new PIXI.Container();

        buttonContainer.x = xOffset;

        const isActiveTool = toolName === activeTool;
        const Icon = tool.Icon;
        const svgIcon = ReactDOMServer.renderToStaticMarkup(<Icon style={isActiveTool ? { stroke: "white" } : {}} />);
        const iconSprite = renderSvg(svgIcon);

        iconSprite.interactive = true;
        iconSprite.cursor = "pointer";
        iconSprite.addEventListener("pointerdown", () => {
            tools[tool.name].onClick(props);
        })

        // Create a background color graphics object for the active tool
        const backgroundColor = isActiveTool ? "#008E97" : "white"
        backgroundGraphics.interactive = true;
        backgroundGraphics.cursor = "pointer";
        backgroundGraphics.beginFill(backgroundColor);
        backgroundGraphics.drawRect(-iconGap / 4, -4, iconGap, toolboxHeight - canvasMargin + 4);
        backgroundGraphics.endFill();
        backgroundGraphics.addEventListener("pointerdown", () => {
            tools[tool.name].onClick(props);
        })

        outline.lineStyle(1, "black", 0.6);
        outline.drawRect(-iconGap / 4, -3, iconGap, toolboxHeight - canvasMargin + 2);
        outline.endFill();
    
        button.addChild(backgroundGraphics);
        button.addChild(outline);
        button.addChild(iconSprite);
        buttonContainer.addChild(button);

        leftToolsContainer.addChild(buttonContainer);
    
        xOffset += iconGap;
    });

    rightTools.forEach(([toolName, tool]) => {
        const disabled = isToolDisabled(tool.name)
        const Icon = tool.Icon
        const svgIcon = ReactDOMServer.renderToStaticMarkup(<Icon style={{
            stroke: tool.name === "clear" ? disabled ? "tomato" : "red" : disabled ? "gray" : "black",
        }} />)
        const iconSprite = renderSvg(svgIcon)
        const button = new PIXI.Container()
        button.addChild(iconSprite)
        button.x = xOffset // Set the X position
        button.interactive = true
        if (!disabled)
            button.onpointerdown = () => tools[tool.name].onClick(props)

        xOffset += iconGap
        button.cursor = "pointer";
        rightToolsContainer.addChild(button)
    })

    return toolboxContainer
}