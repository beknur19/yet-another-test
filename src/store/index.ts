import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import MainPageReducer from './main';
import HeaderReducer from './header';
import LoginReducer from './login';
import ProfileReducer from './profile';
import PostsReducer from './posts';

export const store = configureStore({
  reducer: {
    main: MainPageReducer,
    header: HeaderReducer,
    login: LoginReducer,
    profile: ProfileReducer,
    posts: PostsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
