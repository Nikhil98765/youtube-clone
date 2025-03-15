import { configureStore } from "@reduxjs/toolkit";

import AppReducer from './appSlice';

export const AppStore = configureStore({
  reducer: {
    app: AppReducer
  }
})