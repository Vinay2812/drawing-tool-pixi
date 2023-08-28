export function getAngleKey(line1, line2) {
    return `angle-${line1.shapeId}-${line2.shapeId}`
}

export function getLineKey(line) {
    return `line-${line.shapeId}`
}

export function getPencilKey(pencil) {
    return `pencil-${pencil.shapeId}`
}

export function getPointKey(point) {
    return `point/${point.x}/${point.y}`
}

export function getPointFromPointKey(key) {
    const splits = key.split("/").filter(s => s.length > 0)
    return {
        x: parseFloat(splits[1]),
        y: parseFloat(splits[2])
    }
}

export function getLabelKey(point) {
    return `label-${point.x}-${point.y}`
}

export function getCircleKey(circle) {
    return `circle-${circle.shapeId}`
}
