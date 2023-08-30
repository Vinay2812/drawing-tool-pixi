import { renderLineGraphics } from "./renderers";
import * as events from "./events";

export const toolName = "line";
export const renderer = renderLineGraphics;
export const Icon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        width="25"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
    >
        <circle cx="4" cy="4" r="2" fill={props.style?.stroke ?? "black"} />
        <circle cx="20" cy="20" r="2" fill={props.style?.stroke ?? "black"} />
        <line
            x1="4"
            y1="4"
            x2="20"
            y2="20"
            style={{
                strokeWidth: 2,
            }}
        />
    </svg>
);
export const onClick = (args) => {
    args.setActiveTool("line");
};
export const isLeft = true;
export const cursor = "cursor-crosshair";

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

export * from "./renderers";
