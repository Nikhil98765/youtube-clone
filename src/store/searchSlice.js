import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    suggestions: {}
  },
  reducers: {
    addSearchResults: (state, action) => {
      state.suggestions = { ...state.suggestions, ...action.payload };
    }
  }
});

export const { addSearchResults } = searchSlice.actions;
export default searchSlice.reducer;