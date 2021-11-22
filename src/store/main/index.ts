import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export interface ImageItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface MainPageState {
  loading: boolean;
  item: ImageItem | null;
}
const initialState: MainPageState = {
  item: null,
  loading: false,
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<ImageItem>) => {
      state.item = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setItem, setLoading } = mainPageSlice.actions;

export const selectMainPageState = (state: RootState) => state.main;

export default mainPageSlice.reducer;
