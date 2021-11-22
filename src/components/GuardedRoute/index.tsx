import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  component: FC<{ [x: string]: any }>;
  auth: boolean;
  [x: string]: any;
};

export default ({ component: Component, auth, ...rest }: Props) => (
  <Route
    {...rest}
    render={props => (auth === true ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);
