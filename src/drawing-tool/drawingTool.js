import React, { Component } from 'react';

class DrawingToolsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTool: 'select',
            drawingItems: [],
            undoItems: [],
            shapes: {
                line: [],
                pencil: [],
                circle: [],
            },
        };

        this.graphicsStoreRef = React.createRef();
        this.pointNumberRef = React.createRef();
        this.isDrawing = React.createRef();
        this.selectedPoint = React.createRef();
        this.pencilPointsRef = React.createRef();
        this.viewportRef = React.createRef();
    }

    setIsDrawing = (value) => {
        this.isDrawing.current = value;
    };

    setSelectedPoint = (value) => {
        this.selectedPoint.current = value;
    };

    updateShapes = () => {
        const { drawingItems } = this.state;
        const shapes = drawingItems.reduce((data, item) => {
            if (!data[item.type]) {
                data[item.type] = [];
            }
            data[item.type].push(item.data);
            return data;
        }, {});
        this.setState({ shapes });
    };

    getDrawingTools = () => {
        const {
            activeTool,
            drawingItems,
            undoItems,
            shapes,
            isDrawing,
            selectedPoint,
        } = this.state;

        const {
            graphicsStoreRef,
            pointNumberRef,
            pencilPointsRef,
            viewportRef,
            
        } = this;

        return {
            activeTool,
            drawingItems,
            undoItems,
            shapes,
            graphicsStoreRef,
            pointNumberRef,
            isDrawing,
            selectedPoint,
            pencilPointsRef,
            viewportRef,
        };
    };

    render() {
        const drawingTools = {
            ...this.state,
            graphicsStoreRef: this.graphicsStoreRef,
            pointNumberRef: this.pointNumberRef,
            isDrawing: this.isDrawing,
            selectedPoint: this.selectedPoint,
            pencilPointsRef: this.pencilPointsRef,
            viewportRef: this.viewportRef,
            setActiveTool: (activeTool) => this.setState({ activeTool }),
            setDrawingItems: (drawingItems) => {
                this.setState({ drawingItems }, this.updateShapes);
            },
            setUndoItems: (undoItems) => this.setState({ undoItems }),
            setShapes: (shapes) => this.setState({ shapes }),
            setIsDrawing: this.setIsDrawing,
            setSelectedPoint: this.setSelectedPoint,
        };

        // Render children with the drawingTools prop
        return this.props.children(drawingTools);
    }
}

export default DrawingToolsComponent;
