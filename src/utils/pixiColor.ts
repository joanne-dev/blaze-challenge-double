import * as PIXI from 'pixi.js'
export type RgbColor = {
  r: number
  g: number
  b: number
  a?: number
}
export const getColor = (rgbColor: RgbColor) => {
  const rgbPixiColor = new PIXI.Color({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b, a: rgbColor.a ?? 1 })
  return rgbPixiColor.toRgbaString()
}
