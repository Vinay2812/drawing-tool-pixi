import { getPointerPosition } from "../utils/calculations"
import { renderPencilGraphics } from "./renderers"

export function onDown(e, others) {
  const { setIsDrawing, pencilPointsRef, canvasContainer, viewport } = others
  pencilPointsRef.current = [getPointerPosition(e, viewport, canvasContainer)]
  setIsDrawing(true)
}

export function onMove(e, others) {
  const {
    canvasContainer,
    isDrawing,
    pencilPointsRef,
    shapes,
    viewport,
    graphicsStoreRef
  } = others
  if (!isDrawing || !pencilPointsRef.current.length) return
  const point = getPointerPosition(e, viewport, canvasContainer)
  pencilPointsRef.current.push(point)
  const shapeId = (shapes["pencil"]?.length ?? 0) + 1
  renderPencilGraphics(
    {
      points: pencilPointsRef.current,
      shapeId
    },
    viewport,
    graphicsStoreRef
  )
}

export function onUp(e, others) {
  const {
    setIsDrawing,
    pencilPointsRef,
    canvasContainer,
    shapes,
    setDrawingItems,
    isDrawing,
    viewport,
    drawingItems
  } = others
  if (!isDrawing || !pencilPointsRef.current.length) {
    pencilPointsRef.current = []
    return
  }
  const point = getPointerPosition(e, viewport, canvasContainer)
  const shapeId = (shapes["pencil"]?.length ?? 0) + 1
  const pencil = {
    id: drawingItems.length + 1,
    type: "pencil",
    data: {
      points: [...pencilPointsRef.current, point],
      shapeId: shapeId
    }
  }
  setDrawingItems(
    [...drawingItems, pencil]
  )
  setIsDrawing(false)
}
