import {
    getClosestPoint,
    getPointerPosition,
    getPointsFromLines,
    isSamePoint,
    areSameLines,
    isPointAppearingOnce,
    getLineFromLines
} from "../utils/calculations"
import { renderLineGraphics, renderAngleBetweenLines } from "../line/renderers"

export function onDown(e, others) {
    const {
        viewport,
        setStartPoint,
        setIsDrawing,
        setSelectedPoint,
        shapes,
        canvasConfig
    } = others
    const lines = shapes["line"] ?? []
    const clickedPoint = getPointerPosition(e, viewport)
    const points = getPointsFromLines(lines)
    const endPoint = getClosestPoint(
        clickedPoint,
        points,
        canvasConfig.gridSize / 2
    )
    const isSinglePoint = isPointAppearingOnce(endPoint, points)
    if (isSinglePoint) {
        viewport.plugins.pause("drag")

        const clickedLine = lines.find(
            item =>
                isSamePoint(item.start, endPoint) || isSamePoint(item.end, endPoint)
        )
        if (clickedLine) {
            const fixedPoint = isSamePoint(clickedLine.start, endPoint)
                ? clickedLine.end
                : clickedLine.start
            setSelectedPoint(endPoint)
            setStartPoint(fixedPoint)
            setIsDrawing(true)
            return
        }
    }
    setIsDrawing(false)
}

export function onMove(e, others) {
    const {
        startPoint,
        isDrawing,
        viewport,
        selectedPoint,
        graphicsStoreRef,
        pointNumberRef,
        shapes,
        canvasConfig
    } = others
    if (!startPoint || !isDrawing || !selectedPoint) {
        return
    }
    const end = getPointerPosition(e, viewport)
    const start = startPoint
    const lines = shapes["line"] ?? []
    const selectedLine = {
        start: start,
        end: selectedPoint,
        shapeId: -1
    }
    const removingLine = getLineFromLines(selectedLine, lines)
    if (removingLine) {
        const newLine = { start, end, shapeId: removingLine.shapeId }
        renderLineGraphics(newLine, viewport, graphicsStoreRef, canvasConfig)
        const filteredLines = lines.filter(
            line => !areSameLines(line, removingLine)
        )
        renderAngleBetweenLines(
            [...filteredLines, newLine],
            viewport,
            graphicsStoreRef,
            pointNumberRef,
            canvasConfig
        )
    }
}

export function onUp(e, others) {
    const {
        startPoint,
        selectedPoint,
        isDrawing,
        setIsDrawing,
        setDrawingItems,
        viewport,
        graphicsStoreRef,
        setStartPoint,
        shapes,
        canvasConfig,
        drawingItems
    } = others
    if (!startPoint || !isDrawing || !selectedPoint) {
        return
    }
    viewport.plugins.resume("drag")
    const start = startPoint
    const end = getPointerPosition(e, viewport)
    const selectedLine = {
        start: start,
        end: selectedPoint,
        shapeId: -1
    }
    const lines = shapes["line"] ?? []
    const removingLine = getLineFromLines(selectedLine, lines)
    if (removingLine) {
        const filteredLines = lines.filter(
            line => !areSameLines(line, removingLine)
        )
        const filteredPoints = getPointsFromLines(filteredLines)
        const updatedEnd = getClosestPoint(
            end,
            filteredPoints,
            canvasConfig.gridSize / 2
        )

        const newLine = {
            start,
            end: updatedEnd,
            shapeId: removingLine.shapeId
        }
        let isNewLine = true
        for (const line of lines) {
            if (!areSameLines(newLine, removingLine) && areSameLines(line, newLine)) {
                isNewLine = false
                const pointLabelKey = JSON.stringify(start)
                graphicsStoreRef.current[pointLabelKey]?.forEach(g =>
                    viewport.removeChild(g)
                )
                break
            }
        }
        const filteredDrawingItems = drawingItems.filter(
            item => item.data.shapeId !== removingLine.shapeId
        )
        const newDrawingItems = isNewLine ? [
            ...filteredDrawingItems,
            {
                type: "line",
                data: newLine,
                id: filteredLines.length
            }
        ] : [...filteredDrawingItems];
        setDrawingItems(newDrawingItems)
        setStartPoint(null)
        setIsDrawing(false)
    }
}
