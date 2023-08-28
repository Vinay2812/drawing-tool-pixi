import { Viewport } from "pixi-viewport";

let viewport;

export function handleViewportZoom(viewport) {
    const maxZoomPercent = 1.5;
    const minZoomPercent = 0.8;
    const restrictedZoomFactor = Math.min(
        maxZoomPercent,
        Math.max(minZoomPercent, viewport.scale.x),
    );
    viewport.setZoom(restrictedZoomFactor);
}

export function getPixiViewport(
    events,
    canvasWidth,
    canvasHeight,
    viewportContainer,
    appEvents,
    createNew = false,
) {
    // if (!createNew && viewport) {
    //     viewport.removeEventListener("pointerdown", () => {})
    //     viewport.removeEventListener("pointerup", () => {})
    //     viewport.removeEventListener("pointermove", () => {})
    //     viewport.removeEventListener("pointerout", () => {})
    //     return viewport
    // };
    const newViewport = new Viewport({
        worldWidth: 100000,
        worldHeight: 100000,
        screenWidth: canvasWidth,
        screenHeight: canvasHeight,
        events,
    })
        .pinch({
            noDrag: true,
            factor: 1,
            percent: 1,
            axis: "all",
        })
        .wheel()
        .drag({
            wheel: false,
        }).decelerate();
    if (viewport) {
        viewportContainer.removeChild(viewport)
        viewport.removeAllListeners()
        newViewport.moveCenter(viewport.center)
    }

    // newViewport.removeAllListeners()

    newViewport.zIndex = -1;
    viewport = newViewport;
    viewport.on("zoomed", () => {
        handleViewportZoom(viewport);
    })
    viewport.interactive = true;
    viewport.interactiveChildren = true;
    return newViewport;
}