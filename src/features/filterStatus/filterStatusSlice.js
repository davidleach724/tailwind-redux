import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 'open'
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
  }
})

export const { displayOpen, displayClosed } = statusSlice.actions

export default statusSlice.reducer