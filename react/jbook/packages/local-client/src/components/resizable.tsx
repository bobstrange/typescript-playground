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
  const [width, setWidth] = useState(window.innerWidth * 0.8)

  useEffect(() => {
    let timer: any

    const listener = () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight)
        setInnerWidth(window.innerWidth)
        if (window.innerWidth * 0.8 < width) {
          setWidth(window.innerWidth * 0.8)
        }
      }, 100)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [width])

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.8, Infinity],
      height: Infinity,
      width,
      resizeHandles: ['e'],
      onResizeStop: (event, data) => {
        setWidth(data.size.width)
      },
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
