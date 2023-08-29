import { getPointKey } from "./keys"

export function isSamePoint(start, end) {
    return start.x === end.x && start.y === end.y
}

export function getDistance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}

export function getMidpoint(p1, p2) {
    return {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2
    }
}

export function hasCommonPoint(line1, line2) {
    return (
        isSamePoint(line1.start, line2.start) ||
        isSamePoint(line1.start, line2.end) ||
        isSamePoint(line1.end, line2.start) ||
        isSamePoint(line1.end, line2.end)
    )
}

export function getCommonPoint(line1, line2) {
    if (isSamePoint(line1.start, line2.start)) return line1.start
    if (isSamePoint(line1.start, line2.end)) return line1.start
    if (isSamePoint(line1.end, line2.end)) return line1.end
    if (isSamePoint(line1.end, line2.start)) return line1.end
    return null
}

export function getAngleBetweenLines(line1, line2) {
    if (!hasCommonPoint(line1, line2)) {
        return -1
    }
    const directionVector1 = [
        line1.end.x - line1.start.x,
        line1.end.y - line1.start.y
    ]
    const directionVector2 = [
        line2.end.x - line2.start.x,
        line2.end.y - line2.start.y
    ]

    // Calculate dot product
    const dotProduct =
        directionVector1[0] * directionVector2[0] +
        directionVector1[1] * directionVector2[1]

    // Calculate magnitudes
    const magnitude1 = Math.sqrt(
        directionVector1[0] ** 2 + directionVector1[1] ** 2
    )
    const magnitude2 = Math.sqrt(
        directionVector2[0] ** 2 + directionVector2[1] ** 2
    )

    // Calculate angle in radians
    const angleRadians = Math.acos(dotProduct / (magnitude1 * magnitude2))
    const angleDegrees = (angleRadians * 180) / Math.PI

    return angleDegrees
}

export function getFullAngleBetweenLines(line1, line2) {
    const dx1 = line1.end.x - line1.start.x
    const dy1 = line1.end.y - line1.start.y
    const dx2 = line2.end.x - line2.start.x
    const dy2 = line2.end.y - line2.start.y

    const angle1 = Math.atan2(dy1, dx1)
    const angle2 = Math.atan2(dy2, dx2)

    let angleDifference = angle2 - angle1

    if (angleDifference < 0) {
        angleDifference += 2 * Math.PI
    }

    const angleDegrees = (angleDifference * 180) / Math.PI

    return angleDegrees
}

export function findPointAtDistance(line, distance) {
    const { start, end } = line
    const length = getDistance(start, end)
    if (length === 0) {
        return { x: start.x, y: start.y } // Handle case when start and end are the same
    }
    const t = distance / length
    const point = {
        x: start.x + t * (end.x - start.x),
        y: start.y + t * (end.y - start.y)
    }
    return point
}

export function roundupNumber(num, precision = 1) {
    const multiplyBy = Math.pow(10, precision)
    return Math.round(num * multiplyBy) / multiplyBy
}

export function getClosestPoint(newPoint, points, threshold = 25) {
    let closestIdx = -1

    for (let i = 0; i < points.length; i++) {
        const d = getDistance(newPoint, points[i])

        if (
            d < threshold &&
            (closestIdx === -1 || d < getDistance(newPoint, points[closestIdx]))
        ) {
            closestIdx = i
        }
    }

    if (closestIdx === -1) return newPoint
    return points[closestIdx]
}

export function slope(point1, point2) {
    return (point2.y - point1.y) / (point2.x - point1.x)
}

export function findParallelogramFourthPoint(
    triangleVertices,
    vertexIndex,
    distanceFactor
) {
    if (triangleVertices.length !== 3 || vertexIndex < 0 || vertexIndex > 2) {
        return null // Invalid input
    }

    // Choose the vertex of the triangle
    const vertex = triangleVertices[vertexIndex]

    // Find the two adjacent vertices
    const adjacentVertices = [
        triangleVertices[(vertexIndex + 1) % 3],
        triangleVertices[(vertexIndex + 2) % 3]
    ]

    // Calculate the vectors of the sides adjacent to the chosen vertex
    const vector1 = {
        x: adjacentVertices[0].x - vertex.x,
        y: adjacentVertices[0].y - vertex.y
    }
    const vector2 = {
        x: adjacentVertices[1].x - vertex.x,
        y: adjacentVertices[1].y - vertex.y
    }

    // Calculate the angle bisector
    const angleBisector = {
        x: vector1.x + vector2.x,
        y: vector1.y + vector2.y
    }

    // Calculate the magnitude of the angle bisector
    const angleBisectorMagnitude = Math.sqrt(
        angleBisector.x ** 2 + angleBisector.y ** 2
    )

    // Calculate the desired distance for the fourth point from the chosen vertex
    const fourthPointDistance =
        distanceFactor * Math.sqrt(vector1.x ** 2 + vector1.y ** 2)

    // Normalize the angle bisector vector
    const normalizedAngleBisector = {
        x: angleBisector.x / angleBisectorMagnitude,
        y: angleBisector.y / angleBisectorMagnitude
    }

    // Calculate the position of the fourth point
    const fourthPoint = {
        x: vertex.x + fourthPointDistance * normalizedAngleBisector.x,
        y: vertex.y + fourthPointDistance * normalizedAngleBisector.y
    }

    return fourthPoint
}

function determineOrientationByPoints(point1, point2) {
    const deltaY = point2.y - point1.y
    const deltaX = point2.x - point1.x

    const deltaThreshold = 2

    if (Math.abs(deltaX) < deltaThreshold || deltaY > 0) {
        return "right"
    } else {
        return "left"
    }
}

export function getLabelPosition(point1, point2, gap = 25) {
    const midpoint = getMidpoint(point1, point2)
    const angle = Math.atan2(point2.y - point1.y, point2.x - point1.x)
    const orientation = determineOrientationByPoints(point1, point2)
    const moveDistance = 15
    let x = midpoint.x
    let y = midpoint.y

    // Calculate perpendicular distances
    const perpendicularDistanceLeft = -gap
    const perpendicularDistanceRight = gap

    // Move closer to the start point by moveDistance units
    const moveX = moveDistance * Math.cos(angle + Math.PI)
    const moveY = moveDistance * Math.sin(angle + Math.PI)

    if (orientation === "left") {
        x += perpendicularDistanceLeft * Math.cos(angle + Math.PI / 2) + moveX
        y += perpendicularDistanceLeft * Math.sin(angle + Math.PI / 2) + moveY
    } else {
        x += perpendicularDistanceRight * Math.cos(angle - Math.PI / 2) + moveX
        y += perpendicularDistanceRight * Math.sin(angle - Math.PI / 2) + moveY
    }

    return { x, y }
}

export function getPointerPosition(event, viewport) {
    const globalPos = viewport.toWorld(event.data.global);
    return globalPos;
}

export function getPointsFromLines(lines) {
    if (!lines) return []
    return lines.reduce((prev, line) => [...prev, line.start, line.end], [])
}

export function isPointAppearingOnce(point, allPoints) {
    const pointCountMap = {}

    for (const p of allPoints) {
        const key = JSON.stringify(p)
        if (!pointCountMap[key]) pointCountMap[key] = 0
        pointCountMap[key] = pointCountMap[key] + 1
    }
    return pointCountMap[JSON.stringify(point)] === 1
}

export function areSameLines(line1, line2) {
    return (
        (isSamePoint(line1.start, line2.start) &&
            isSamePoint(line1.end, line2.end)) ||
        (isSamePoint(line1.start, line2.end) && isSamePoint(line1.end, line2.start))
    )
}

export function getLineFromLines(line, lines) {
    return lines.find(line1 => {
        const line2 = {
            end: line1.start,
            start: line1.end,
            shapeId: line1.shapeId
        }
        const same = areSameLines(line1, line) || areSameLines(line2, line)
        return same
    })
}

export function getCommonPointsMap(lines) {
    const commonPointMap = new Map()

    for (const line of lines) {
        const { start, end } = line
        const key1 = getPointKey(start)
        const key2 = getPointKey(end)
        const e1 = commonPointMap.get(key1) ?? []
        commonPointMap.set(key1, [...e1, { x: end.x, y: end.y }])
        const e2 = commonPointMap.get(key2) ?? []
        commonPointMap.set(key2, [...e2, { x: start.x, y: start.y }])
    }
    return commonPointMap
}

export function getPointsSortedInClockwise(points, commonPoint) {
    function calculateDet(a, b) {
        return { x: a.x - b.x, y: a.y - b.y }
    }

    function calculateCrossProduct(a, b) {
        return a.x * b.y - a.y * b.x
    }

    function angleSortComparator(origin, reference, a, b) {
        const dReference = calculateDet(reference, origin)
        const da = calculateDet(a, origin)
        const db = calculateDet(b, origin)

        const detB = calculateCrossProduct(dReference, db)

        if (detB === 0 && db.x * dReference.x + db.y * dReference.y >= 0) {
            return false
        }

        const detA = calculateCrossProduct(dReference, da)

        if (detA === 0 && da.x * dReference.x + da.y * dReference.y >= 0) {
            return true
        }

        if (detA * detB >= 0) {
            return calculateCrossProduct(da, db) > 0
        }

        return detA > 0
    }

    points.sort((a, b) =>
        angleSortComparator(
            commonPoint,
            { x: commonPoint.x + 1, y: commonPoint.y + 1 },
            a,
            b
        )
            ? -1
            : 1
    )
    return points
}

export function isPointerNearEdges(e, container, edgeThreshold, canvasWidth, canvasHeight, toolboxHeight, canvasMargin) {
    const { clientX: pointerX, clientY: pointerY } = e;
    const containerRect = container.getBoundingClientRect();
    const containerScrollTop = container.scrollTop;

    const leftEdge = containerRect.left + canvasMargin;
    const rightEdge = containerRect.right - canvasMargin;
    const topEdge = containerRect.top + toolboxHeight + canvasMargin - containerScrollTop;
    const bottomEdge = (containerScrollTop ? (containerRect.top + canvasHeight - toolboxHeight) : (containerRect.bottom)) - canvasMargin

    const isNearLeft = Math.abs(pointerX - leftEdge) <= edgeThreshold;
    const isNearRight = Math.abs(rightEdge - pointerX) <= edgeThreshold;
    const isNearTop = Math.abs(pointerY - topEdge) <= edgeThreshold;
    const isNearBottom = Math.abs(bottomEdge - pointerY) <= edgeThreshold;
    return isNearLeft || isNearBottom || isNearRight || isNearTop
}

export function isPointerOutside(event, container, gap = 20) {
    const containerRect = container.getBoundingClientRect()
    const pointerX = event.clientX
    const pointerY = event.clientY

    return (
        pointerX + gap < containerRect.left ||
        pointerX - gap > containerRect.right ||
        pointerY + gap < containerRect.top ||
        pointerY - gap > containerRect.bottom
    )
}
