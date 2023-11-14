import { Assets } from '@pixi/assets'
export const manifest = {
  bundles: [
    {
      name: 'fonts',
      assets: [
        {
          alias: 'ramp-export',
          src: 'src/assets/fonts/ramp-export.xml'
        }
      ]
    },
    {
      name: 'spines',
      assets: [
        {
          alias: 'panda',
          src: 'src/assets/spines/panda/panda.json'
        },
        {
          alias: 'confetti',
          src: 'src/assets/spines/confetti/confetti.json'
        },
        {
          alias: 'ramp',
          src: 'src/assets/spines/ramp/Ramp_mobile.json'
        }
      ]
    }
  ]
}

export const loadManifest = async () => {
  await Assets.init({ manifest })
}
export const loadFont = async () => {
  await Assets.loadBundle('fonts')
}

export const megaBigWinStyle = {
  fontFamily: 'Arial',
  fontSize: 50,
  fontWeight: 'bold',
  fill: ['#ffea00', '#ff9500'],
  stroke: '#5285A3',
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 3,
  dropShadowDistance: 3,
  letterSpacing: 5
}
export const imagePaths = [
  'src/assets/double/1.png',
  'src/assets/double/2.png',
  'src/assets/double/3.png',
  'src/assets/double/4.png',
  'src/assets/double/5.png',
  'src/assets/double/6.png',
  'src/assets/double/7.png',
  'src/assets/double/8.png',
  'src/assets/double/9.png',
  'src/assets/double/10.png',
  'src/assets/double/11.png',
  'src/assets/double/12.png',
  'src/assets/double/13.png',
  'src/assets/double/14.png',
  'src/assets/double/15.png'
]
