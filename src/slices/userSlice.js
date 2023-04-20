import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, username: payload };
    },
  },
});

export const { changeUser } = slice.actions;

export const selectUser = (state) => state.user;

export default slice.reducer;
