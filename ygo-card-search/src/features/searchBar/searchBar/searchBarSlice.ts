import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload)
    // clearSearchTerm: (state) => (state = '')
  }
});

// export const { setSearchTerm, clearSearchTerm } = searchBarSlice.actions;
export const { setSearchTerm } = searchBarSlice.actions;
export const selectSearchTerm = (state: any) => state.search;
export default searchBarSlice.reducer;
