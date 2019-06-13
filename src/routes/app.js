import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes';

const Routes = () => (
  <Switch>
    {routes.map(
      route =>
        route.component && (
          <Route
            key={route.name}
            name={route.name}
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} />}
          />
        )
    )}
    <Redirect from="/" to="/dashboard" />
  </Switch>
);

export default Routes;
