import { getAngleBetweenLines, getDistance, getPointsFromLines, isSamePoint, roundupNumber } from "./tools/utils/calculations";

export class ShapeAnalyzer {
    constructor(lines, gridSize) {
        this.visitedArr = [];
        this.graph = [];
        this.stack = [];
        this.cycles = [];
        this.lines = lines;
        this.gridSize = gridSize;
    }

    #getUniquePoints(lines) {
        const points = getPointsFromLines(lines);
        const pointsSet = new Set();
        points.forEach((point) => {
            pointsSet.add(point);
        });
        return Array.from(pointsSet);
    }

    #getPointIndex(points, point) {
        for (let i = 0; i < points.length; i++) {
            if (isSamePoint(points[i], point)) {
                return i;
            }
        }
        return -1;
    }

    #createGraph(uniquePoints, lines) {
        this.graph = [];
        for (const commonPoint of uniquePoints) {
            const edge = [];
            for (const line of lines) {
                const { start, end } = line;
                if (isSamePoint(start, commonPoint)) {
                    edge.push(this.#getPointIndex(uniquePoints, end));
                } else if (isSamePoint(end, commonPoint)) {
                    edge.push(this.#getPointIndex(uniquePoints, start));
                }
            }
            this.graph.push(edge);
        }
    }

    #dfs(currVertex, parentVertex, V) {
        if (currVertex >= V || this.visitedArr[currVertex]) {
            return false;
        }
        this.visitedArr[currVertex] = true;
        this.stack.push(currVertex);
        for (const endVertex of this.graph[currVertex]) {
            if (!this.visitedArr[endVertex]) {
                if (this.#dfs(endVertex, currVertex, V)) return true;
            }
            if (endVertex !== parentVertex && this.visitedArr[endVertex]) {
                this.stack.push(endVertex);
                this.cycles.push(this.stack);
                return true;
            }
        }
        this.stack.pop();
        return false;
    }

    #getDuplicateNumber(arr) {
        const countMap = {};

        for (const num of arr) {
            if (!countMap[num]) {
                countMap[num] = 1;
            } else {
                return num;
            }
        }
        return -1;
    }

    getShapesData() {
        const uniquePoints = this.#getUniquePoints(this.lines);
        this.#createGraph(uniquePoints, this.lines);
        this.stack = [];
        this.cycles = [];
        const V = uniquePoints.length;
        this.visitedArr = new Array(V);
        this.visitedArr.fill(false);
        for (let i = 0; i < V; i++) {
            if (!this.visitedArr[i]) {
                this.stack = [];
                this.#dfs(i, -1, V);
            }
        }

        const result = []
        for (const cycle of this.cycles) {
            const cycleStart = this.#getDuplicateNumber(cycle)
            if (cycleStart === -1) {
                for (let i = 1; i < cycle.length; i++) {
                    result.push([cycle[i - 1], cycle[i]])
                }
                continue
            }
            const cycleStartIdx = cycle.indexOf(cycleStart)
            const cycle1 = cycle.slice(cycleStartIdx)
            result.push(cycle1)
            for (let i = 1; i <= cycleStartIdx; i++) {
                result.push([cycle[i - 1], cycle[i]])
            }
        }

        const shapeData = result.map((shape, idx) => {
            let type
            switch (shape.length) {
                case 2:
                    type = "line"
                    break
                case 4:
                    type = "triangle"
                    break
                default:
                    type = "polygon"
                    break
            }
            if (type === "line") {
                const start = uniquePoints[shape[0]]
                const end = uniquePoints[shape[1]]
                return {
                    type,
                    data: {
                        start,
                        end,
                        distance: roundupNumber(getDistance(start, end) / this.gridSize, 1),
                        shapeId: idx + 1
                    }
                }
            }

            const data = {
                lines: [],
                angles: []
            }
            const n = shape.length
            let angleSum = 0
            for (let i = 1; i < n; i++) {
                const line1 = {
                    start: uniquePoints[shape[i - 1]],
                    end: uniquePoints[shape[i]],
                    shapeId: i
                }

                const line2 = {
                    end: uniquePoints[shape[i]],
                    start: uniquePoints[shape[(i + 1) % n]],
                    shapeId: i + 1
                }

                data.lines.push({
                    start: line1.start,
                    end: line1.end,
                    distance: roundupNumber(
                        getDistance(line1.start, line1.end) / this.gridSize,
                        1
                    ),
                    shapeId: idx + 1
                })

                let angle = roundupNumber(getAngleBetweenLines(line2, line1), 0)
                if (i === n - 1) {
                    angle = roundupNumber((n - 3) * 180 - angleSum, 0)
                } else {
                    angleSum += angle
                }
                data.angles.push({
                    degree: angle,
                    point: line1.end
                })
            }

            return {
                type,
                data
            }
        })
        return shapeData

    }
}
