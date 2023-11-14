import * as PIXI from 'pixi.js'

export type PixiApp = {
  width: number
  height: number
  backgroundColor: string
  view: HTMLCanvasElement
}

export const createAppInstance = (pixiApp: PixiApp) => {
  const app = new PIXI.Application({
    width: pixiApp.width,
    height: pixiApp.height,
    backgroundAlpha: 0,
    view: pixiApp.view
  })
  globalThis.__PIXI_APP__ = app
  return app
}
