import { configureStore } from '@reduxjs/toolkit'
import JokesReducer from '../utils/JokesSlice'

export const store = configureStore({
  reducer: {
    allJokes: JokesReducer,
  },
})