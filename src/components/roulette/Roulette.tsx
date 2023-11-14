import { Sprite, Stage } from '@pixi/react'
import { imagePaths } from '../../utils/AssetsLoader.ts'
import { useRoulette } from '../../hooks/useRoulette.ts'
import { RouletteStyled } from './Roulette.styled.ts'

const Roulette = () => {
  const { positions, backgroundRoulettePath, indicatorPath, stageWidth } = useRoulette()
  return (
    <RouletteStyled>
      <img src={indicatorPath} alt={'indacator'} />
      <Stage width={stageWidth} height={80}>
        <Sprite image={backgroundRoulettePath} scale={{ x: 2, y: 0.95 }} anchor={0.5} x={stageWidth / 2} y={40} />
        {positions.map((pos, index) => (
          <Sprite key={index} image={imagePaths[index]} scale={{ x: 0.67, y: 0.67 }} anchor={0.5} x={pos} y={40} />
        ))}
      </Stage>
    </RouletteStyled>
  )
}

export default Roulette
