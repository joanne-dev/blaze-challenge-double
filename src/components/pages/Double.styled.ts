import styled from 'styled-components'
import backgroundImage from '../../assets/images/background.png'
import previous from '../../assets/images/previous.svg'

export const BgImageStyledDiv = styled.div`
  width: 100%;
  height: 174px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`

export const PreviousStyledDiv = styled.div`
  top: 10px;
  position: relative;
  width: 90%;
  height: 20px;
  background-image: url(${previous});
  background-size: cover;
  background-position: center;
`
export const DoubleMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .double-mobile-container {
    width: 400px;
  }
`
