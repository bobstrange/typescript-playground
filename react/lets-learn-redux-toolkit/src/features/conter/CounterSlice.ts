import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // Immer が Immutable にしてくれているので、Mutate するようにコードを書いてしまって問題ない
      state.value++
    },
    // decrement
    // reset
  },
})

export const { incremented } = counterSlice.actions
export default counterSlice.reducer
