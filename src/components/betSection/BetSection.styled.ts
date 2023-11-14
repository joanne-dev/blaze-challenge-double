import styled from 'styled-components'

export const BetSectionStyled = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
  .game-mode-container {
    border: 3px solid #f8d352;
    display: flex;
    height: 43px;
    align-items: center;
    justify-content: center;
    .game-mode-buttons {
      background: #000;
      width: 98%;
      display: flex;
      height: 80%;
      gap: 5px;
    }
  }
  .title-select-color {
    color: #f8d352;
    text-align: center;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family:
      Sofia Pro,
      sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 900;
    line-height: 16px;
    text-transform: uppercase;
  }
  .amount-selector {
    display: flex;
    gap: 5px;
    .amount-buttons {
      display: flex;
      width: 47%;
      gap: 5px;
    }
  }
  .bet-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 5px;
    height: 100px;
  }
  .select-color-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`
export const LineStyled = styled.div`
  background: #445d75;
  height: 2px;
  width: 30%;
`

export const AmountStyled = styled.div`
  width: 53%;
  border-radius: 4px;
  background: #2b3a49;
  display: flex;
  height: 40px;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`
