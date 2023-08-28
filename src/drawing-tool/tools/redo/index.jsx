import { resetGraphics } from "../utils/helpers";

export const toolName = "redo";
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
        <path d="M21 7v6h-6" />
        <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
);

export const onClick = (args) => {
    const {
        setDrawingItems,
        setUndoItems,
        undoItems,
        graphicsStoreRef,
        viewportRef,
        pointNumberRef,
        drawingItems,
    } = args;
    resetGraphics(graphicsStoreRef, pointNumberRef, viewportRef);
    setDrawingItems([...drawingItems, undoItems[undoItems.length - 1]]);
    setUndoItems(undoItems.slice(0, undoItems.length - 1));
};

export const isLeft = false;
export const cursor = "cursor-pointer";

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
