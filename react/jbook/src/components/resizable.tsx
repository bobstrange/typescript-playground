import './resizable.css'
import { ResizableBox } from 'react-resizable'

type ResizableProps = {
  direction: 'horizontal' | 'vertical'
}

export const Resizable: React.FC<ResizableProps> = ({
  direction,
  children,
}) => {
  return (
    <ResizableBox
      minConstraints={[Infinity, 48]}
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
      height={300}
      width={Infinity}
      resizeHandles={['s']}
    >
      {children}
    </ResizableBox>
  )
}
