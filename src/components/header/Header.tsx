import { Button } from '../button/Button.tsx'
import { HeaderStyled } from './Header.styled.ts'
import { IconLogoStyled } from '../icon/Icon.ts'
import { IconBox } from '../iconBox/IconBox.tsx'
export const Header = () => {
  return (
    <HeaderStyled>
      <IconLogoStyled />
      <IconBox type={'currency'} text={'420.00'} width={'130px'} height={'40px'} />
      <div className={'button-container'}>
        <Button text={'DEPOSIT'} type={'header'} />
      </div>
      <IconBox type={'user'} width={'40px'} height={'40px'} />
    </HeaderStyled>
  )
}
