import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'first post', content: 'Hello fooo!'}, 
  {id: '2', title: 'second post', content: 'Supppp fooo'}
]

const postSlice = createSlice({
  name: 'posts', 
  initialState, 
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { postAdded } = postSlice.actions
export default postSlice.reducer