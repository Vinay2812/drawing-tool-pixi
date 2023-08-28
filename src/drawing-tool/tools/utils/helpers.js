export function resetGraphics(
    graphicsStoreRef,
    pointNumberRef,
    // appRef: React.MutableRefObject<PIXI.Application<HTMLCanvasElement> | null>,
    viewport
) {
    if (!viewport) return
    Object.keys(graphicsStoreRef.current).forEach(key => {
        graphicsStoreRef.current[key].forEach(g => {
            viewport.removeChild(g)
        })
    })
    pointNumberRef.current = 0
}

export async function delay(ms = 100) {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), ms)
    })
}
