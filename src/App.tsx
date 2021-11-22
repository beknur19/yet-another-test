import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import { useAppSelector } from 'store';
import { selectAuthorized } from 'store/login';
import GuardedRoute from './components/GuardedRoute';
import Header from './components/Header';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Login from './pages/Login';

const App = () => {
  const authorized = useAppSelector(selectAuthorized);

  console.log(authorized);

  return (
    <Header>
      <CssBaseline />
      <Switch>
        <GuardedRoute component={Posts} auth={authorized} path="/posts" />
        <GuardedRoute component={Profile} auth={authorized} path="/profile" />
        <Route path="/login">
          <Login />
        </Route>
        <Route component={Main} path="/" exact />
      </Switch>
    </Header>
  );
};

export default App;
