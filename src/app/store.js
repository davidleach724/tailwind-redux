import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import issuesReducer from '../features/issues/issuesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    issues: issuesReducer
  },
})