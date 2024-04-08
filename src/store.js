import { configureStore } from '@reduxjs/toolkit';
import filterReduxReducer from './features/filter/filterSlice';

export default configureStore({
  reducer: {
    filter: filterReduxReducer,
  },
});
