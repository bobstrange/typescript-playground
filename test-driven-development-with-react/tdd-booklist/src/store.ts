import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import { reducer } from './redux/reducer'
const initialState = {}
const middlewares = [thunk]
const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(reducer, initialState, composedEnhancers)
