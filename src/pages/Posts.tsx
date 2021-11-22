import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import { useAppDispatch, useAppSelector } from '../store';
import { selectPosts, selectPostsLoading } from '../store/posts';
import { getPosts } from '../store/posts/thunk';

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const loading = useAppSelector(selectPostsLoading);

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pt={5}>
      <Typography variant="h3">Посты</Typography>
      {loading ? (
        <>
          <Skeleton variant="rectangular" height={100} sx={{ marginY: 4 }} />
          <Skeleton variant="rectangular" height={100} sx={{ marginY: 4 }} />
          <Skeleton variant="rectangular" height={100} sx={{ marginY: 4 }} />
          <Skeleton variant="rectangular" height={100} sx={{ marginY: 4 }} />
        </>
      ) : (
        posts.map(post => (
          <Paper elevation={6} sx={{ marginY: 4, padding: 5 }}>
            <Typography variant="h5">
              {post.id}. {post.title}
            </Typography>
            <Typography display="block" variant="body1">
              {post.body}
            </Typography>
          </Paper>
        ))
      )}
    </Box>
  );
};

export default Posts;
