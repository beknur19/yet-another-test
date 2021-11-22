import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ProfileState {
  posts: PostData[];
  loading: boolean;
}
const initialState: ProfileState = {
  posts: [],
  loading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostData[]>) => {
      state.posts = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setPosts, setLoading } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPostsLoading = (state: RootState) => state.posts.loading;

export default postsSlice.reducer;
