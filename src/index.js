import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Routes from './routes';
import reducers from './reducers';
import PostList from './containers/post-list';

import {middlewares} from './middlewares/index';

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Routes />
  </Provider>
  , document.querySelector('.container'));
