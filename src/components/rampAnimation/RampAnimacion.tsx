import 'pixi-spine'
import { useEffect, useRef } from 'react'
import { createAppInstance } from '../../utils/pixiApp.ts'
import { Stage } from '@pixi/react'
import BigWinText from '../bigWinText/BigWinText.tsx'
import { BigWinTextStyled, RampAnimationStyled } from '../bigWinText/BigWinText.styled.ts'
import { loadSpines } from '../../utils/spineLoader.ts'
import { useDispatch } from 'react-redux'
import { changeLoadingVisibility, changeRampAnimationVisibility, setState } from '../../store/bet.ts'
import { getColor } from '../../utils/pixiColor.ts'
import { states } from '../../utils/enums/enums.ts'
const RampAnimation = () => {
  const pixiAppRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  useEffect(() => {
    if (pixiAppRef.current) {
      const app = createAppInstance({
        width: 400,
        height: 600,
        backgroundColor: getColor({
          r: 17,
          g: 1,
          b: 1,
          a: 0.9
        }),
        view: document.createElement('canvas')
      })
      pixiAppRef.current.appendChild(app.view)
      loadSpines(app)

      setTimeout(() => {
        dispatch(changeRampAnimationVisibility())
        dispatch(setState(states.WAITING))
        dispatch(changeLoadingVisibility())
      }, 5000)
      return () => {
        app.destroy(true)
      }
    }
  }, [])
  return (
    <div>
      <RampAnimationStyled>
        <div ref={pixiAppRef}></div>
        <BigWinTextStyled>
          <Stage width={400} height={600} options={{ backgroundAlpha: 0 }}>
            <BigWinText />
          </Stage>
        </BigWinTextStyled>
      </RampAnimationStyled>
    </div>
  )
}

export default RampAnimation
