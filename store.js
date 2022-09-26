import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// REDUCERS
import counterReducer from './components/homescreen/features/counterSlice'

const middlewares = getDefaultMiddleware({
  // https://github.com/reduxjs/redux-toolkit/issues/415
  immutableCheck: false,
});

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: middlewares,
})