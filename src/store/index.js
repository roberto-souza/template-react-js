import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import Reactotron from '~/config/reactotron';
import { history } from '~/routes/history';
import reducers from './ducks';

const middlewares = [routerMiddleware(history)];

const store = createStore(
  reducers(history),
  compose(
    applyMiddleware(...middlewares),
    Reactotron.createEnhancer()
  )
);

export default store;
