import { resetGraphics } from "../utils/helpers";

export const toolName = "undo";
export const renderer = () => {};
export const events = {
    onMove: () => {},
    onDown: () => {},
    onUp: () => {},
};
export const Icon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M3 7v6h6" />
        <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>
);

export const onClick = (args) => {
    const {
        setDrawingItems,
        setUndoItems,
        graphicsStoreRef,
        viewportRef,
        pointNumberRef,
        drawingItems,
        undoItems,
    } = args;
    resetGraphics(graphicsStoreRef, pointNumberRef, viewportRef);
    setDrawingItems(
        !drawingItems.length
            ? []
            : drawingItems.slice(0, drawingItems.length - 1),
    );
    setUndoItems([...undoItems, drawingItems[drawingItems.length - 1]]);
};

export const isLeft = false;
export const cursor = "cursor-default";

export const config = {
    name: toolName,
    renderer,
    events: events,
    Icon,
    onClick,
    isLeft,
    cursor,
    svgIcon: <Icon />,
};
