import { configureStore } from '@reduxjs/toolkit'

// REDUCERS
import counterReducer from './components/homescreen/features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})