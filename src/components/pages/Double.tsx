import { useEffect } from 'react'
import Roulette from '../roulette/Roulette.tsx'
import { loadFont, loadManifest } from '../../utils/AssetsLoader.ts'
import { Header } from '../header/Header.tsx'
import { BgImageStyledDiv, DoubleMainContainer, PreviousStyledDiv } from './Double.styled.ts'
import { BetSection } from '../betSection/BetSection.tsx'
import { Loading } from '../loading/Loading.tsx'
import { useSelector } from 'react-redux'
import RampAnimation from '../rampAnimation/RampAnimacion.tsx'

export const Double = () => {
  const betState = useSelector((state: any) => state.betState)

  useEffect(() => {
    const loadAssets = async () => {
      await loadManifest()
      await loadFont()
    }
    loadAssets()
  }, [])

  return (
    <DoubleMainContainer>
      <div className={'double-mobile-container'}>
        {betState.isRampAnimationShowed && <RampAnimation />}
        <Header />
        {betState.isLoadingShowed && <Loading />}
        <BgImageStyledDiv>
          <PreviousStyledDiv />
        </BgImageStyledDiv>
        <Roulette />
        <BetSection />
      </div>
    </DoubleMainContainer>
  )
}
