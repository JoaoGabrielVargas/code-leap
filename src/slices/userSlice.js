import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, name: payload };
    },
  },
});

export const { changeUser } = slice.actions;

export const selectUser = (state) => state.user;

export default slice.reducer;
