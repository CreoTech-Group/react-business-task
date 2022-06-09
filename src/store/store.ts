import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import businessReducer from 'store/slices/business';

export default configureStore({
  reducer: {
      business: businessReducer,
  },
  middleware: [thunkMiddleware],
});
