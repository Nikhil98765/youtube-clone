import { configureStore } from '@reduxjs/toolkit';

import AppReducer from './appSlice';
import SearchReducer from './searchSlice';
import ChatReducer from './chatSlice';

export const AppStore = configureStore({
  reducer: {
    app: AppReducer,
    search: SearchReducer,
    chat: ChatReducer
  }
});
