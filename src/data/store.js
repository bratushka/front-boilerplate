import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import reducer from './reducer';


export const history = createBrowserHistory();

// eslint-disable-next-line no-underscore-dangle, no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [
  routerMiddleware(history),
  thunk,
];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function generateStore() {
  return createStore(reducer, enhancer);
}

export default generateStore;
