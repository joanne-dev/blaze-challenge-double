import styled from 'styled-components'

export interface IButtonStylesProps {
  $background: string
  color: string
  $fontSize: string
  $border?: string
}
export const ButtonStyled = styled.button<IButtonStylesProps>`
  background: ${(props) => props.$background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.$fontSize};
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: block;
  border: ${(props) => props.$border ?? 0};
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:disabled {
    background: #606060;
  }

  .icon {
    width: 70px;
    height: 70px;
    margin-top: -5px;
  }

  &.mode-disabled {
    background: #000;
    color: #f8d352;
  }

  &.mode-active {
    background: linear-gradient(101deg, #f3c318 42.12%, #aa8309 102.7%);
    color: #000;
  }

  &.red-active {
    background: #9d0024;
  }

  &.yellow-active {
    background: #b49634;
  }

  &.blue-active {
    background: #3e22b9;
  }

  &.bet-disabled {
    border: ${(props) => props.$border ?? 0};
  }
`

export interface ITextButtonStylesProps {
  $colorText: string
  $fontSizeText: string
  stroke: string
}
export const TextButtonStyled = styled.div<ITextButtonStylesProps>`
  color: ${(props) => props.$colorText};
  font-size: ${(props) => props.$fontSizeText};
  -webkit-text-stroke: 0.5px ${(props) => props.stroke};
  font-weight: 900;
`
