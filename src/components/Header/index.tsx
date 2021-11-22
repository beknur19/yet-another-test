import React, { ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useAppDispatch, useAppSelector } from '../../store';
import { selectHeaderExpanded, setExpanded } from '../../store/header';
import { selectAuthorized, setAuthorized } from '../../store/login';

type Props = {
  children: ReactNode;
};

const routes = [
  { path: '/', name: 'Главная' },
  { path: '/posts', name: 'Посты' },
  { path: '/profile', name: 'Профиль' },
];

const Header = (props: Props) => {
  const dispatch = useAppDispatch();
  const expanded = useSelector(selectHeaderExpanded);
  const history = useHistory();
  const location = useLocation();

  const authorized = useAppSelector(selectAuthorized);

  const handlerCreator = useCallback(
    path => () => {
      if (location.pathname !== path) {
        history.push(path);
        dispatch(setExpanded(false));
      }
    },
    [history, location, dispatch],
  );

  const handleSignOut = useCallback(() => {
    dispatch(setAuthorized(false));
    history.push('/');
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => dispatch(setExpanded(true))}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TestProject
          </Typography>
          {authorized ? (
            <Button onClick={handleSignOut} color="inherit">
              Выйти
            </Button>
          ) : (
            <Button onClick={() => history.push('/login')} color="inherit">
              Авторизация
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={expanded}
        onClose={() => dispatch(setExpanded(false))}
        onOpen={() => dispatch(setExpanded(true))}
      >
        <Box width="250px">
          <List>
            {routes.map(r => (
              <ListItem key={r.path} onClick={handlerCreator(r.path)} button>
                <ListItemText primary={r.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
      <Container>{props.children}</Container>
    </Box>
  );
};

export default Header;
