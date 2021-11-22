import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from '../store';
import { selectProfileState } from '../store/profile';
import { getUserInfo } from '../store/profile/thunk';

const Profile = () => {
  const dispatch = useAppDispatch();
  const profileData = useAppSelector(selectProfileState);

  const { city, street, suite, zipcode } = profileData.user?.address || {};
  const addressLine = [city, street, suite, zipcode].join(', ');

  useEffect(() => {
    dispatch(getUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pt={5}>
      {profileData.loading ? (
        <>
          <Skeleton height={4} />
          <Skeleton width="40%" />
          <Skeleton width="30%" />
          <Skeleton width="30%" />
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </>
      ) : (
        <>
          <Typography variant="h3">{profileData.user?.name}</Typography>
          <Typography display="block" variant="body1">
            Email: {profileData.user?.email}
          </Typography>
          <Typography display="block" variant="body1">
            Номер телефона: {profileData.user?.phone}
          </Typography>
          <Typography display="block" variant="body1">
            Сайт: {profileData.user?.website}
          </Typography>
          <Typography display="block" variant="body1">
            Адрес: {addressLine}
          </Typography>
          <Typography display="block" variant="body1">
            Место работы: {profileData.user?.company?.name}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Profile;
