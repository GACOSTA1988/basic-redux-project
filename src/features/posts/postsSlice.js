import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'first post', content: 'Hello fooo!'}, 
  {id: '2', title: 'second post', content: 'Supppp fooo'}
]

const postSlice = createSlice({
  name: 'posts', 
  initialState, 
  reducers: {}
})

export default postSlice.reducer