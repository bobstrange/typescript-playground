import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

type Props = {
  key?: string
  timer?: number
  animate?: boolean
}
export const CountdownAnimation: React.FC<Props> = ({
  key = 1,
  timer = 20,
  animate = true,
  children,
}) => {
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ['#004777', 0.33],
        ['#F7B801', 0.33],
        ['#A30000', 0.33],
      ]}
      strokeWidth={6}
      trailColor="darkolivegreen"
      onComplete={() => {
        // stopAnimate()
      }}
    >
      {children}
    </CountdownCircleTimer>
  )
}
