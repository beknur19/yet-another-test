import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface HeaderState {
  expanded: boolean;
}
const initialState: HeaderState = {
  expanded: false,
};

export const loginSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setExpanded: (state, action: PayloadAction<boolean>) => {
      state.expanded = action.payload;
    },
  },
});

export const { setExpanded } = loginSlice.actions;

export const selectHeaderExpanded = (state: RootState) => state.header.expanded;

export default loginSlice.reducer;
