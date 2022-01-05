import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),
    /* eslint-disable no-unused-vars */
    clearSearchTerm: (state) => (state = '')
    /* eslint-enable no-unused-vars */
  }
});

export const { setSearchTerm, clearSearchTerm } = searchBarSlice.actions;
export const selectSearchTerm = (state: any) => state.search;
export default searchBarSlice.reducer;
