import { Assets } from '@pixi/assets'
import { Spine } from 'pixi-spine'
import * as PIXI from 'pixi.js'

export type SpineConfig = {
  app: PIXI.Application<PIXI.ICanvas>
  spine: any
  animationName: string
  scale: number | number[]
  position: number[]
  loop: boolean
}
export const spineLoader = async ({ app, spine, animationName, scale, position, loop }: SpineConfig) => {
  const animation: Spine = new Spine(spine.spineData)
  app.stage.addChild(animation)
  if (animation.state.hasAnimation(animationName)) {
    animation.state.setAnimation(0, animationName, loop)
    animation.autoUpdate = true
    animation.scale.set(typeof scale === 'number' ? scale : scale[0], typeof scale === 'number' ? scale : scale[1])
    animation.position.set(position[0], position[1])
  }
  return animation
}

export const loadSpines = async (app: PIXI.Application<PIXI.ICanvas>) => {
  const gameScreenAssets = await Assets.loadBundle('spines')
  spineLoader({
    app,
    spine: gameScreenAssets.confetti,
    animationName: 'in',
    scale: 0.3,
    position: [187.5, 300],
    loop: true
  })
  await spineLoader({
    app,
    spine: gameScreenAssets.ramp,
    animationName: 'mega_win_loop',
    scale: 1,
    position: [187.5, 300],
    loop: true
  })

  spineLoader({
    app,
    spine: gameScreenAssets.panda,
    animationName: 'win',
    scale: 1,
    position: [187.5, 600],
    loop: true
  })
}
