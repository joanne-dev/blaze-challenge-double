import styled from 'styled-components'
export type BoxInfoStyledProps = {
  width: string
  height: string
}
export const BoxInfoStyled = styled.div<BoxInfoStyledProps>`
  border-radius: 4px;
  border: 1px solid rgba(140, 144, 153, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`
