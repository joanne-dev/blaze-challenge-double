import { useEffect, useRef, useState } from 'react'
import { imagePaths } from '../utils/AssetsLoader.ts'
import { useDispatch, useSelector } from 'react-redux'
import { setState, validateIfUserHasWon } from '../store/bet.ts'
import { gsap } from 'gsap'
import { states } from '../utils/enums/enums.ts'

const betColors = ['blue', 'red', 'blue', 'red', 'blue', 'blue', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'yellow']
export const useRoulette = () => {
  const imageWidth = 68
  const stageWidth = 400
  const [positions, setPositions] = useState(imagePaths.map((_, index) => index * imageWidth))
  const [isPaused, setIsPaused] = useState(true)
  const speedObj = useRef({ value: 18 })
  const [animationComplete, setAnimationComplete] = useState(false)
  const rafId = useRef({} as any)

  const backgroundRoulettePath = 'src/assets/images/roulette_bg.svg'
  const indicatorPath = 'src/assets/images/indicator.svg'

  const dispatch = useDispatch()
  const betState = useSelector((state: any) => state.betState)

  useEffect(() => {
    if (betState.state === states.ROLLING) {
      startAnimation()
    }
  }, [betState.state])

  useEffect(() => {
    if (!isPaused) {
      rafId.current = requestAnimationFrame(updatePositions)
    } else {
      cancelAnimationFrame(rafId.current)
    }
    return () => cancelAnimationFrame(rafId.current)
  }, [isPaused])

  useEffect(() => {
    if (!isPaused) {
      rafId.current = requestAnimationFrame(updatePositions)
    }
    const decelerationTimer = setTimeout(
      () => {
        if (!isPaused) {
          initiateDeceleration()
        }
      },
      Math.floor(Math.random() * 1001) + 2000
    )

    return () => {
      cancelAnimationFrame(rafId.current)
      clearTimeout(decelerationTimer)
    }
  }, [isPaused])

  useEffect(() => {
    if (animationComplete) {
      const winningIndex = findWinningIndex(positions, imageWidth, imagePaths.length, stageWidth)
      setAnimationComplete(false)
      dispatch(
        validateIfUserHasWon({
          colorWin: betColors[winningIndex]
        })
      )
    }
  }, [animationComplete])

  const updatePositions = () => {
    if (!isPaused && speedObj.current.value > 0) {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => {
          let newPos = pos - speedObj.current.value
          if (newPos <= -imageWidth) {
            newPos += imageWidth * imagePaths.length
          }
          return newPos
        })
      )
    }

    if (!isPaused) {
      rafId.current = requestAnimationFrame(updatePositions)
    }
  }
  const initiateDeceleration = () => {
    if (isPaused) return

    setIsPaused(true)
    gsap.to(speedObj.current, {
      value: 0,
      duration: Math.floor(Math.random() * 5) + 2,
      ease: 'power1.out',
      onComplete: () => {
        dispatch(setState(states.COMPLETED))
        setAnimationComplete(true)
      }
    })
  }

  const findWinningIndex = (positions: number[], imageWidth: number, numImages: number, stageWidth: number) => {
    const indicatorPositionX = stageWidth / 2
    const adjustedPositions = positions.map((pos) => ((pos % (imageWidth * numImages)) + imageWidth * numImages) % (imageWidth * numImages))

    return adjustedPositions.reduce((closestIdx, currentPos, idx) => {
      const closestPos = adjustedPositions[closestIdx]
      const closestDistance = Math.abs(closestPos - indicatorPositionX)
      const currentDistance = Math.abs(currentPos - indicatorPositionX)
      return currentDistance < closestDistance ? idx : closestIdx
    }, 0)
  }
  const startAnimation = () => {
    if (isPaused) {
      gsap.killTweensOf(speedObj.current)
      setIsPaused(false)
      speedObj.current.value = 20
    }
  }
  return {
    positions,
    backgroundRoulettePath,
    indicatorPath,
    imageWidth,
    stageWidth,
    startAnimation,
    initiateDeceleration
  }
}
