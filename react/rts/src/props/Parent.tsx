import { Child } from './Child'

export const Parent = () => {
  return (
    <Child color="blue" onClick={() => console.log('Clicked')}>
      <p>For children</p>
    </Child>
  )
}
