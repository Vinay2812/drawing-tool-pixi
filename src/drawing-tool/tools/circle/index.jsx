import { renderCircleWithMeasurements } from "./renderer";
import * as events from "./events";

export const toolName = "circle";
export const renderer = renderCircleWithMeasurements;

export const Icon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
    </svg>
);
export const onClick = (args) => {
    args.setActiveTool("circle");
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
export * from "./renderer";
