import { useTypedSelector } from './user-typed-selector'
export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
    const { data, order } = state.cells!
    const orderedCells = order.map((id) => data[id])
    const showFunc = `
        import _React from 'react'
        import _ReactDOM from 'react-dom'
        var show = (value) => {
          const rootElement = document.querySelector('#root')

          if (typeof value === 'object') {
            if (value.$$typeof && value.props) {
              _ReactDOM.render(value, rootElement)
            } else {
              rootElement.innerHTML = JSON.stringify(value, null, 2)
            }
          } else {
            rootElement.innerHTML = value
          }
        }
      `
    const showFuncNoop = 'var show = () => {}'
    const cumulativeCode = []
    for (let c of orderedCells) {
      if (c.type === 'code') {
        if (c.id === cellId) {
          cumulativeCode.push(showFunc)
        } else {
          cumulativeCode.push(showFuncNoop)
        }
        cumulativeCode.push(c.content)
      }
      if (c.id === cellId) {
        break
      }
    }
    return cumulativeCode
  }).join('\n')
}
