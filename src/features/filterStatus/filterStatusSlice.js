import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 'all'
}

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    displayOpen: (state) => {
      state.value = 'open'
    },
    displayClosed: (state) => {
      state.value = 'closed'
    },
    displayAll: (state) => {
      state.value = 'all'
    }
  }
})

export const { displayOpen, displayClosed, displayAll } = statusSlice.actions

export default statusSlice.reducer