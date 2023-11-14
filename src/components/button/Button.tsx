import { ButtonStyled, TextButtonStyled } from './Button.styled.ts'


type ButtonProps = {
  text: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type: 'gameMode'| 'bet' | 'header' | 'amount' ;
}
export const Button = ({ text, type, onClick, className }: ButtonProps) => {
  switch (type) {
    case 'header':{
    return (
        <ButtonStyled color={'#FFF'} $fontSize={'12px'} $background={'#F12C4C'} onClick={onClick} className={className}>
          {text}
        </ButtonStyled>
      )
    }
    case 'gameMode':{
      return (
        <ButtonStyled $background={'#000'}
                      color={'#0F1923'}
                      $fontSize={'10px'} onClick={onClick} className={className}>
          {text}
        </ButtonStyled>
      )
    }
    case 'amount':{
      return (
        <ButtonStyled  $background={'#2B3A49'}
                       color={'#FFF'}
                       $fontSize={'18px'}
                       $border={'1px solid #577597'} onClick={onClick} className={className}>
          {text}
        </ButtonStyled>
      )
    }
  }
}

type BetButtonProps =  {
    text: string
    onClick?: () => void
    className?: string
    disabled?: boolean
  multiplier: string
  icon?: string
  type: 'betRed' | 'betBlue' | 'betYellow'
}
export const BetButton = ({
  text,
  multiplier,
  icon,
  onClick,
  className,
  disabled,
    type
}: BetButtonProps) => {
  switch (type) {
    case 'betRed':{
      return (
          <ButtonStyled
              color={'#FFF'}
              $background={'#E81538'}
              $fontSize={'12px'}
              $border={'2px solid #B50F2A'}
              onClick={onClick}
              className={className}
              disabled={disabled}
          >
            <TextButtonStyled $colorText={'#FFFFFF'}  stroke={'#B52342'} $fontSizeText={'12px'}>
              {text}
            </TextButtonStyled>
            <TextButtonStyled $colorText={'#FFFFFF'}  stroke={'#B52342'}  $fontSizeText={'36px'}>
              {multiplier}
            </TextButtonStyled>
            {icon && <img className={'icon'} src={icon} alt={'coin'} />}
          </ButtonStyled>
      )
    }
    case 'betBlue':{
      return (
            <ButtonStyled
                color={'#FFF'}
                $background={'#5F43DC'}
                $fontSize={'12px'}
                $border={'2px solid #29109A'}
                onClick={onClick}
                className={className}
                disabled={disabled}
            >
                <TextButtonStyled $colorText={'#FFFFFF'}  stroke={'#791900'} $fontSizeText={'12px'}>
                {text}
                </TextButtonStyled>
                <TextButtonStyled $colorText={'#FFFFFF'}  stroke={'#791900'}  $fontSizeText={'36px'}>
                {multiplier}
                </TextButtonStyled>
                {icon && <img className={'icon'} src={icon} alt={'coin'} />}
            </ButtonStyled>
        )
    }
    case 'betYellow':{
      return (
            <ButtonStyled
                color={'#FFF'}
                $background={'#F3C318'}
                $fontSize={'12px'}
                $border={'2px solid #CC9B00'}
                onClick={onClick}
                className={className}
                disabled={disabled}
            >
                <TextButtonStyled $colorText={'#FFFFFF'}  stroke={'#B52342'} $fontSizeText={'10px'}>
                {text}
                </TextButtonStyled>
                <TextButtonStyled $colorText={'#FFFFFF'}  stroke={'#B52342'}  $fontSizeText={'24px'}>
                {multiplier}
                </TextButtonStyled>
                {icon && <img className={'icon'} src={icon} alt={'coin'} />}
            </ButtonStyled>
        )
    }
  }


  return
}
