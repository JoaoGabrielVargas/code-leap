import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import postReducer from '../slices/postsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
