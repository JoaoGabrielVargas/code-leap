import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  content: '',
};

export const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    newPost(state, { payload }) {
      return { ...state, title: payload.title, content: payload.content };
    },
  },
});

export const { newPost } = slice.actions;

export const selectNewPost = (state) => state.post;

export default slice.reducer;
