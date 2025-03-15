import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    showSideBar: true
  },
  reducers: {
    toggleSideBar: (state, action) => {
      state.showSideBar = !state.showSideBar;
    }
  }
});

export const { toggleSideBar } = appSlice.actions;
export default appSlice.reducer;