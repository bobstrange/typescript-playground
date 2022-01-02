import './resizable.css'
import { ResizableBox, ResizableBoxProps } from 'react-resizable'

type ResizableProps = {
  direction: 'horizontal' | 'vertical'
}

export const Resizable: React.FC<ResizableProps> = ({
  direction,
  children,
}) => {
  let resizableProps: ResizableBoxProps
  if (direction === 'horizontal') {
    resizableProps = {
      minConstraints: [window.innerWidth * 0.2, Infinity],
      maxConstraints: [window.innerWidth * 0.8, Infinity],
      height: Infinity,
      width: window.innerWidth * 0.8,
      resizeHandles: ['e'],
    }
  } else {
    resizableProps = {
      minConstraints: [Infinity, 48],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
    }
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>
}
