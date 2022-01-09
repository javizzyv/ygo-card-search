import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    setToken: (state, action) => (state = action.payload),
    /* eslint-disable no-unused-vars */
    clearToken: (state) => (state = '')
    /* eslint-enable no-unused-vars */
  }
});

export const { setToken, clearToken } = userSlice.actions;
export const selectUser = (state: any) => {
  return state.token;
};
export default userSlice.reducer;
