import styled, { keyframes } from 'styled-components'

const loadAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

export const LoadingBar = styled.div`
  background: linear-gradient(90deg, rgba(143, 118, 254, 1) 0%, rgba(95, 67, 220, 1) 100%);
  height: 20px;
  width: 0;
  animation: ${loadAnimation} 9s ease-in-out forwards;
`

export const LoaderContainer = styled.div`
  position: absolute;
  background: rgba(34, 51, 71, 0.8);
  border-radius: 3px;
  width: 360px;
  left: calc(50% - 360px / 2);
  border: 1px solid #e9d49f;
  z-index: 3;
  margin-top: 45px;

  .loading-text {
    font-family:
      Sofia Pro,
      sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    z-index: 4;
    top: 3px;
    right: calc(50% - 50px);
  }
`
