import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
