import { resetGraphics } from "../utils/helpers"

export const toolName = "clear"
export const renderer = () => {}
export const events = {
  onMove: () => {},
  onDown: () => {},
  onUp: () => {}
}
export const Icon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
)

export const onClick = ({
  setDrawingItems,
  setUndoItems,
  graphicsStoreRef,
  pointNumberRef,
  viewport
}) => {
  setDrawingItems([])
  setUndoItems([])
  resetGraphics(graphicsStoreRef, pointNumberRef, viewport)
}

export const isLeft = false
export const cursor = "cursor-pointer"

export const config = {
  name: toolName,
  renderer,
  events: events,
  Icon,
  onClick,
  isLeft,
  cursor,
  svgIcon: <Icon />
}
