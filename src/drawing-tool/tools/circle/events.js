import {
    getClosestPoint,
    getPointerPosition,
    getPointsFromLines
} from "../utils/calculations"
import { renderCircleWithMeasurements } from "./renderer"

export function onDown(e, others) {
    const {
        setStartPoint,
        setIsDrawing,
        shapes,
        viewport,
        canvasContainer,
        canvasConfig
    } = others
    const start = getPointerPosition(e, viewport, canvasContainer)
    const lines = shapes["circle"] ?? []
    const points = getPointsFromLines(lines)
    const closestPoint = getClosestPoint(start, points, canvasConfig.gridSize / 2)
    setStartPoint(closestPoint)
    setIsDrawing(true)
}

export function onMove(e, others) {
    const {
        startPoint,
        isDrawing,
        viewport,
        graphicsStoreRef,
        shapes,
        canvasContainer,
        canvasConfig
    } = others
    if (!startPoint || !isDrawing) return
    const end = getPointerPosition(e, viewport, canvasContainer)
    const shapeId = (shapes["circle"] ?? []).length + 1
    renderCircleWithMeasurements(
        { start: startPoint, end, shapeId },
        viewport,
        graphicsStoreRef,
        canvasConfig
    )
}

export function onUp(e, others) {
    const {
        startPoint,
        isDrawing,
        setIsDrawing,
        viewport,
        setStartPoint,
        setDrawingItems,
        shapes,
        canvasContainer,
        drawingItems
    } = others
    if (!startPoint || !isDrawing) {
        return
    }

    const start = startPoint
    const end = getPointerPosition(e, viewport, canvasContainer)
    const shapeId = (shapes["circle"] ?? []).length + 1
    setDrawingItems([
        ...drawingItems,
        {
            type: "circle",
            id: drawingItems.length + 1,
            data: { start, end, shapeId }
        }
    ])

    setStartPoint(null)
    setIsDrawing(false)
}
