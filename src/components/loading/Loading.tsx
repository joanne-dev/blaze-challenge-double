import { LoaderContainer, LoadingBar } from './Loading.styled.ts'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { changeLoadingVisibility, setRollingTime, setState, states } from '../../store/bet.ts'

export const Loading = () => {
  const dispatch = useDispatch()
  const intervalId = useRef<number>(0)
  const betState = useSelector((state: any) => state.betState)

  useEffect(() => {
    let time = 7
    intervalId.current = setInterval(() => {
      dispatch(setRollingTime(time))
      time--
    }, 1000)
    return () => clearInterval(intervalId.current)
  }, [])

  useEffect(() => {
    if (betState.rollingTime === 0) {
      dispatch(setState(states.ROLLING))
      dispatch(changeLoadingVisibility())
      clearInterval(intervalId.current)
      return
    }
  }, [betState.rollingTime])
  return (
    <LoaderContainer>
      <div className={'loading-text'}>Rolling in {betState.rollingTime}s</div>
      <LoadingBar></LoadingBar>
    </LoaderContainer>
  )
}
