import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface LoginState {
  authorized: boolean;
}
const initialState: LoginState = {
  authorized: localStorage.getItem('authorized') === 'true',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAuthorized: (state, action: PayloadAction<boolean>) => {
      localStorage.setItem('authorized', `${action.payload}`);
      state.authorized = action.payload;
    },
  },
});

export const { setAuthorized } = loginSlice.actions;

export const selectAuthorized = (state: RootState) => state.login.authorized;

export default loginSlice.reducer;
