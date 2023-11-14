import { configureStore } from '@reduxjs/toolkit'
import { betStateSlice } from './bet.ts'
export const store = configureStore({
  reducer: {
    betState: betStateSlice.reducer
  }
})
