import {
  getClosestPoint,
  getDistance,
  getLineFromLines,
  getPointerPosition,
  getPointsFromLines,
  roundupNumber
} from "../utils/calculations"
import {
  renderLineGraphics,
  renderNewLine,
  renderAngleBetweenLines
} from "./renderers"

export function onDown(e, others) {
  const {
    viewport,
    setStartPoint,
    setIsDrawing,
    shapes,
    canvasConfig
  } = others
  const lines = shapes["line"] ?? []
  const points = getPointsFromLines(lines)
  const startPoint = getPointerPosition(e, viewport)
  const closestPoint = getClosestPoint(
    startPoint,
    points,
    canvasConfig.gridSize / 2
  )
  setStartPoint(closestPoint)
  setIsDrawing(true)
}

export function onMove(e, others) {
  const {
    startPoint,
    isDrawing,
    graphicsStoreRef,
    pointNumberRef,
    shapes,
    viewport,
    canvasConfig
  } = others
  if (!startPoint || !isDrawing) return

  const end = getPointerPosition(e, viewport)
  const start = startPoint
  const lines = shapes["line"] ?? []
  const line = { start, end, shapeId: lines.length + 1 }
  const lineExist = getLineFromLines(line, lines)
  const length = roundupNumber(
    getDistance(line.start, line.end) / canvasConfig.gridSize,
    1
  )
  if (lineExist || length <= 0.1) return
  renderLineGraphics(line, viewport, graphicsStoreRef, canvasConfig)
  renderAngleBetweenLines(
    [...lines, line],
    viewport,
    graphicsStoreRef,
    pointNumberRef,
    canvasConfig
  )
}

export function onUp(e, others) {
  const {
    startPoint,
    isDrawing,
    setIsDrawing,
    setDrawingItems,
    setStartPoint,
    shapes,
    viewport,
    canvasConfig,
    drawingItems
  } = others
  if (!startPoint || !isDrawing) {
    return
  }

  const start = startPoint
  const end = getPointerPosition(e, viewport)
  const lines = shapes["line"] ?? []
  const points = getPointsFromLines(lines)
  const updatedStart = getClosestPoint(start, points, canvasConfig.gridSize / 2)
  const updatedEnd = getClosestPoint(end, points, canvasConfig.gridSize / 2)
  const line = {
    start: updatedStart,
    end: updatedEnd,
    shapeId: lines.length + 1
  }
  const lineExist = getLineFromLines(line, lines)
  const length = roundupNumber(
    getDistance(line.start, line.end) / canvasConfig.gridSize,
    1
  )
  if (!lineExist && length > (0.1 * viewport.scale.x)) renderNewLine(line, setDrawingItems, drawingItems)
  setStartPoint(null)
  setIsDrawing(false)
}
