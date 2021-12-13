import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.value.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.value = state.value.filter(issue => issue.id != action.payload.id)
    }
  }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer