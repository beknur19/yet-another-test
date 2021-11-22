import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import { selectMainPageState } from '../store/main';
import { useAppDispatch } from '../store';
import { getMainPagePhoto } from '../store/main/thunk';

const Main = () => {
  const dispatch = useAppDispatch();
  const state = useSelector(selectMainPageState);

  useEffect(() => {
    dispatch(getMainPagePhoto(20));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ width: '100%', marginRight: 0.5, my: 5 }}>
      {state.item ? (
        <Box sx={{ pr: 2 }}>
          <Typography gutterBottom variant="body2">
            {state.item.title}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton width="60%" />
        </Box>
      )}

      {!state.loading || state.item ? (
        <img style={{ width: '100%' }} alt={state.item?.title} src={state.item?.url} />
      ) : (
        <Skeleton variant="rectangular" width="100%" height={500} />
      )}
    </Box>
  );
};

export default Main;
