import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  content: '',
  id: '',
};

export const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    newPost(state, { payload }) {
      return {
        ...state, title: payload.title, content: payload.content, id: payload.id,
      };
    },
    getId(state, { payload }) {
      return {
        ...state, id: payload.id,
      };
    },
  },
});

export const { newPost, getId } = slice.actions;

export const selectNewPost = (state) => state.post;

export default slice.reducer;
