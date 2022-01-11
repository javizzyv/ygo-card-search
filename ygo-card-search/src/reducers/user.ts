import { createSlice } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';

export const userSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    setUser: (state, action) => (state = action.payload),
    /* eslint-disable no-unused-vars */
    clearUser: (state) => (state = '')
    /* eslint-enable no-unused-vars */
  }
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state: RootStateOrAny) => state.user;
export default userSlice.reducer;
