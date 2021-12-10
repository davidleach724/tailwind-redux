import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../apiCalls";

const initialState = {
  value: []
}

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    fetchIssues: (state) => {
      fetchData()
      .then(data => console.log(data))
    }
  }
})

export const { fetchIssues } = issuesSlice.actions

export default issuesSlice.reducer