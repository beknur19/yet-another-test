import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export interface AddressData {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface CompanyData {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: AddressData;
  company: CompanyData;
}

interface ProfileState {
  user: UserData | null;
  loading: boolean;
}
const initialState: ProfileState = {
  user: null,
  loading: false,
};

export const loginSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = loginSlice.actions;

export const selectProfileState = (state: RootState) => state.profile;

export default loginSlice.reducer;
