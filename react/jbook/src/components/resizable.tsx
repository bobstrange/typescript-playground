import './resizable.css'
import { ResizableBox, ResizableBoxProps } from 'react-resizable'
import { useEffect, useState } from 'react'

type ResizableProps = {
  direction: 'horizontal' | 'vertical'
}

export const Resizable: React.FC<ResizableProps> = ({
  direction,
  children,
}) => {
  let resizableProps: ResizableBoxProps
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    let timer: any

    const listener = () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight)
        setInnerWidth(window.innerWidth)
      }, 100)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.8, Infinity],
      height: Infinity,
      width: innerWidth * 0.8,
      resizeHandles: ['e'],
    }
  } else {
    resizableProps = {
      minConstraints: [Infinity, 48],
      maxConstraints: [Infinity, innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
    }
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>
}
