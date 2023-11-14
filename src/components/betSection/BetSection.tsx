import { BetButton, Button } from '../button/Button.tsx'
import { AmountStyled, BetSectionStyled, LineStyled } from './BetSection.styled.ts'
import { useDispatch, useSelector } from 'react-redux'
import {
  activeBlueButton,
  activeRedButton,
  activeYellowButton,
  blockBetButtons,
  setBet2xAmount,
  setBetMoreHalfAmount,
  setBetType,
  unblockBetButtons
} from '../../store/bet.ts'
import { useEffect } from 'react'
import { Mode, states } from '../../utils/enums/enums.ts'
export const BetSection = () => {
  const dispatch = useDispatch()
  const betSection = useSelector((state: any) => state.betState)
  const setMode = (mode: Mode) => {
    dispatch(setBetType(mode))
  }
  useEffect(() => {
    if (betSection.state === states.ROLLING) {
      dispatch(blockBetButtons())
    } else if (betSection.state === states.WAITING) {
      dispatch(unblockBetButtons())
    }
  }, [betSection.state])

  return (
    <BetSectionStyled>
      <div className={'game-mode-container'}>
        <div className={'game-mode-buttons'}>
          <Button
            type={'gameMode'}
            text={Mode.NORMAL}
            onClick={() => setMode(Mode.NORMAL)}
            className={betSection.betTypes.normal.className}
          />
          <Button type={'gameMode'} text={Mode.AUTO} onClick={() => setMode(Mode.AUTO)} className={betSection.betTypes.auto.className} />
          <Button type={'gameMode'} text={Mode.FREE} onClick={() => setMode(Mode.FREE)} className={betSection.betTypes.free.className} />
        </div>
      </div>
      <div className={'amount-selector'}>
        <AmountStyled>
          <span>AMOUNT: {betSection.betAmount}</span>
          <span>$</span>
        </AmountStyled>
        <div className={'amount-buttons'}>
          <Button type={'amount'} text={'½'} onClick={() => dispatch(setBetMoreHalfAmount())} />
          <Button type={'amount'} text={'2X'} onClick={() => dispatch(setBet2xAmount())} />
        </div>
      </div>
      <div>
        <div className={'select-color-title'}>
          <LineStyled></LineStyled>
          <div className={'title-select-color'}>SELECT COLOR AND BET!</div>
          <LineStyled></LineStyled>
        </div>

        <div className={'bet-buttons'}>
          <BetButton
            type={'betRed'}
            text={'BET'}
            multiplier={'X2'}
            onClick={() => dispatch(activeRedButton())}
            className={betSection.betButtons.redButton.className}
            disabled={betSection.betButtons.redButton.disabled}
          ></BetButton>

          <BetButton
            type={'betYellow'}
            text={'BET AND WIN UP TO'}
            multiplier={'250X'}
            icon={'src/assets/images/coinmax_bet.svg'}
            onClick={() => dispatch(activeYellowButton())}
            className={betSection.betButtons.yellowButton.className}
            disabled={betSection.betButtons.yellowButton.disabled}
          ></BetButton>

          <BetButton
            type={'betBlue'}
            text={'BET'}
            multiplier={'X2'}
            onClick={() => dispatch(activeBlueButton())}
            className={betSection.betButtons.blueButton.className}
            disabled={betSection.betButtons.blueButton.disabled}
          ></BetButton>
        </div>
      </div>
    </BetSectionStyled>
  )
}
