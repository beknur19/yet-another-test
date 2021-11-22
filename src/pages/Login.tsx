import React, { useCallback, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useHistory } from 'react-router';
import { useAppDispatch } from '../store';
import { setAuthorized } from '../store/login';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(
    e => {
      if (email === 'Admin' && password === '12345') {
        dispatch(setAuthorized(true));
        history.push('/profile');
      } else {
        setOpen(true);
      }

      e.preventDefault();
    },
    [email, password, dispatch, history],
  );

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <div>
      <Box
        sx={{
          width: '40%',
          marginX: 'auto',
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Авторизоваться
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Имя пользователя или пароль введены не верно"
        action={
          <IconButton aria-label="close" color="inherit" sx={{ p: 0.5 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        }
      />
    </div>
  );
};

export default Login;
