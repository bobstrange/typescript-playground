import ReactDOM from 'react-dom'

export type Renderer = ReturnType<typeof createContainer>['render']
export type Container = ReturnType<typeof createContainer>['container']

export const createContainer = () => {
  const container = document.createElement('div')
  return {
    render: (component: JSX.Element) => ReactDOM.render(component, container),
    container,
  }
}
