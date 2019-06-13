import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import { history } from '~/routes/history';
import Application from '~/views';
import Login from '~/views/Login';

const AppRoutes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        path="/login"
        name="Login"
        render={props => <Login {...props} />}
      />
      <Route
        path="/"
        name="Home"
        render={props => <Application {...props} />}
      />
    </Switch>
  </ConnectedRouter>
);

export default AppRoutes;
