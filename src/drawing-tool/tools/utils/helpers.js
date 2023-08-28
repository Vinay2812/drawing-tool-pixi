export function resetGraphics(
    graphicsStoreRef,
    pointNumberRef,
    // appRef: React.MutableRefObject<PIXI.Application<HTMLCanvasElement> | null>,
    viewportRef
) {
    if (!viewportRef.current) return
    Object.keys(graphicsStoreRef.current).forEach(key => {
        graphicsStoreRef.current[key].forEach(g => {
            viewportRef.current.removeChild(g)
        })
    })
    pointNumberRef.current = 0
}

export async function delay(ms = 100) {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), ms)
    })
}
