import { configureStore } from '@reduxjs/toolkit';

import AppReducer from './appSlice';
import SearchReducer from './searchSlice';

export const AppStore = configureStore({
  reducer: {
    app: AppReducer,
    search: SearchReducer
  }
});
