import React from 'react';
import Loadable from 'react-loadable';

import Loader from '~/components/Loader';

const Loading = () => <Loader />;

const Dashboard = Loadable({
  loader: () => import('~/views/Dashboard'),
  loading: Loading
});

const UserList = Loadable({
  loader: () => import('~/views/User/List'),
  loading: Loading
});

const routes = [
  {
    path: '/dashboard',
    exact: true,
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/users',
    exact: true,
    name: 'Usuários',
    component: UserList
  }
];

export default routes;
