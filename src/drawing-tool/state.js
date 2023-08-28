import { useEffect, useRef, useState } from "react";

export function useDrawingTools() {
    const [activeTool, setActiveTool] = useState("select");
    const [drawingItems, setDrawingItems] = useState([]);
    const [undoItems, setUndoItems] = useState([]);
    const [shapes, setShapes] = useState({
        "line": [],
        "pencil": [],
        "circle": []
    });
    

    const graphicsStoreRef = useRef({})
    const pointNumberRef = useRef(0);
    const isDrawing = useRef(false);
    const selectedPoint = useRef(null);
    const pencilPointsRef = useRef([]);
    const viewportRef = useRef(null);
    const startPoint = useRef(null);

    const setIsDrawing = (value) => isDrawing.current = value;
    const setSelectedPoint = (value) => selectedPoint.current = value;
    const setStartPoint = (value) => startPoint.current = value;

    useEffect(() => {
        if (!drawingItems.length) return;
        setShapes(drawingItems.reduce((data, item) => {
            if (!data[item.type]) {
                data[item.type] = [];
            }
            data[item.type].push(item.data);
            return data;
        }, {}))
    }, [drawingItems])

    // return function getDrawingTools() {
        return {
            // values
            activeTool,
            drawingItems,
            undoItems,
            shapes,
            startPoint,
            // refs
            graphicsStoreRef,
            pointNumberRef,
            isDrawing,
            selectedPoint,
            pencilPointsRef,
            viewportRef,
            // setters
            setActiveTool,
            setDrawingItems,
            setUndoItems,
            setShapes,
            setIsDrawing,
            setSelectedPoint,
            setStartPoint
        }
    // }
}