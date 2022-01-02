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
    <ResizableBox height={300} width={Infinity} resizeHandles={['s']}>
      {children}
    </ResizableBox>
  )
}
