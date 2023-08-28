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
    const leftTools = Object.entries(tools).filter(([_, tool]) => {
        return tool.isLeft && !hiddenTools.includes(tool.name)
    })
    const rightTools = Object.entries(tools).filter(([_, tool]) => {
        return !tool.isLeft && !hiddenTools.includes(tool.name)
    })

    const iconGap = 45;
    const toolboxContainer = new PIXI.Container()
    toolboxContainer.height = toolboxHeight
    const leftToolsContainer = new PIXI.Container()
    const rightToolsContainer = new PIXI.Container()

    toolboxContainer.addChild(leftToolsContainer)
    toolboxContainer.addChild(rightToolsContainer)

    let xOffset = 0 // Initial X position for the buttons
    toolboxContainer.y = 10
    // toolboxContainer.x = canvasMargin * 1.5
    toolboxContainer.cursor = "pointer"

    rightToolsContainer.x = canvasMargin / 1.5;

    function isToolDisabled(toolName) {
        if (drawingItems.length === 0 && undoItems.length === 0) return true
        if (toolName === "redo") return undoItems.length === 0
        return drawingItems.length === 0
    }

    leftTools.forEach(([toolName, tool], idx) => {
        const isActiveTool = toolName === activeTool; // Check if this tool is the active tool
        const Icon = tool.Icon;
        const svgIcon = ReactDOMServer.renderToStaticMarkup(<Icon style={isActiveTool ? { stroke: "white" } : {}} />);
        const iconSprite = renderSvg(svgIcon);
        const button = new PIXI.Container();
        // Create a background color graphics object for the active tool
        if (isActiveTool) {
            const backgroundColor = "#008E97"
            const backgroundGraphics = new SmoothGraphics();
            backgroundGraphics.beginFill(backgroundColor);
            backgroundGraphics.drawRect(-iconGap / 4, -4, iconGap, toolboxHeight - canvasMargin + 3);
            backgroundGraphics.endFill();
            button.addChild(backgroundGraphics);
        } else {
            const outline = new PIXI.Graphics();
            outline.lineStyle(1, "black", 0.6);
            outline.drawRect(-iconGap / 4, -3, iconGap, toolboxHeight - canvasMargin + 2);
            outline.endFill();
            button.addChild(outline);
        }

        button.addChild(iconSprite);
        const buttonContainer = new PIXI.Container();
        buttonContainer.cursor = "pointer";
        buttonContainer.addChild(button);
        buttonContainer.x = xOffset;
        buttonContainer.interactive = true;
        buttonContainer.onpointerdown = () => tools[tool.name].onClick(props);
        xOffset += iconGap;

        leftToolsContainer.addChild(buttonContainer);
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

        xOffset += iconGap // Add the width of the button plus 10px of padding
        button.cursor = "pointer";
        rightToolsContainer.addChild(button)
    })

    return toolboxContainer
}