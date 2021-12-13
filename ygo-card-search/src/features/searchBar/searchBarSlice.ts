import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload)
    // clearSearchTerm: (state) => (state = '')
  }
});

export const { setSearchTerm } = searchBarSlice.actions;
export const selectSearchTerm = (state: string) => state.search;
export default searchBarSlice.reducer;
