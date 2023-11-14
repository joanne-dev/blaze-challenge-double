import { useEffect, useRef, useState } from 'react'
import * as PIXI from 'pixi.js'
import { BitmapText, Container, Text } from '@pixi/react'
import gsap from 'gsap'
import { megaBigWinStyle } from '../../utils/AssetsLoader.ts'
import { ITextStyle } from 'pixi.js'

const BigWinText = () => {
  const containerRef = useRef<PIXI.Container>(null)
  const [winAmount, setWinAmount] = useState(0)
  const winAmountObject = { value: 0 }
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.scale, { x: 0.1, y: 0.1 }, { x: 1, y: 1, duration: 3, ease: 'elastic.out(1, 0.3)' })
    }

    const countAnimation = gsap.to(winAmountObject, {
      duration: 2,
      value: 5234,
      ease: 'none',
      onUpdate: () => {
        setWinAmount(Math.floor(winAmountObject.value))
      }
    })
    return () => {
      countAnimation.kill()
    }
  }, [])

  const textStyle = new PIXI.TextStyle(megaBigWinStyle as ITextStyle)
  return (
    <Container ref={containerRef} position={[400 / 2, 270]}>
      <Text text='MEGA' style={textStyle} anchor={0.5} y={-50} />
      <Text text='BIG WIN' style={textStyle} anchor={0.5} />
      <BitmapText text={`$${winAmount.toLocaleString()}`} style={{ fontName: 'ramp-export', fontSize: 15 }} anchor={0.5} y={80} />
    </Container>
  )
}

export default BigWinText
