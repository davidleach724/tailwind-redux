import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import statusReducer from '../features/filterStatus/filterStatusSlice'
import favoriteReducer from '../features/favoriteIssue/favoriteSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    status: statusReducer,
    favorite: favoriteReducer
  },
})