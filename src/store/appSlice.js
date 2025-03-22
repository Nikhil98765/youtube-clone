import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    showSideBar: true
  },
  reducers: {
    toggleSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    hideSideBar: (state) => {
      state.showSideBar = false;
    },
    showSideBar: (state) => {
      state.showSideBar = true;
    }
  }
});

export const { toggleSideBar, hideSideBar, showSideBar } = appSlice.actions;
export default appSlice.reducer;