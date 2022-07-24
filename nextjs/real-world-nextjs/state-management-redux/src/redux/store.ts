import { useMemo } from "react"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

let store
const initialState = {}

type Action = {
  type: "INCREMENT" | "DECREMENT"
  id: string
}

const reducer = (state = initialState, action: Action) => {
  const itemId = action.id
  switch (action.type) {
    case "INCREMENT":
      const newItemAmount = itemId in state ? state[itemId] + 1 : 1
      return {
        ...state,
        [itemId]: newItemAmount,
      }
    case "DECREMENT":
      if (state?.[itemId] > 0) {
        return {
          ...state,
          [itemId]: state[itemId] - 1,
        }
      }
      return state
    default:
      return state
  }
}

function initStore(state = initialState) {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware()))
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  if (typeof window === "undefined") return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
