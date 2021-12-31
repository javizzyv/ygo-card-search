import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    setToken: (state, action) => (state = action.payload)
    // clearToken: (state) => (state = '')
  }
});

// export const { setToken, clearToken } = userSlice.actions;
export const { setToken } = userSlice.actions;
export const selectUser = (state: any) => {
  return state.token;
};
export default userSlice.reducer;
