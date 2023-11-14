import { IconCurrencyStyled, IconUserStyled } from '../icon/Icon.ts'
import { BoxInfoStyled, BoxInfoStyledProps } from './BoxInfo.styled.ts'

type IconTypes = 'user' | 'currency' | 'favorite' | 'share' | 'sound-mute' | 'reload' | 'info' | 'stats' | 'fullscreen'

type BoxInfoProps = BoxInfoStyledProps & {
  text?: string
  type: IconTypes
}
export const IconBox = ({ text, type, width, height }: BoxInfoProps) => {
  return (
    <BoxInfoStyled height={height} width={width}>
      <Icon type={type} />
      {text && <span>{text}</span>}
    </BoxInfoStyled>
  )
}

const Icon = ({ type }: { type: IconTypes }) => {
  switch (type) {
    case 'user':
      return <IconUserStyled />
    case 'currency':
      return <IconCurrencyStyled />
    default:
      return <IconUserStyled />
  }
}
