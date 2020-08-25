import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { fetchUser, createUser, createPost, fetchPostsAndUsers } from './actions';
import App from './App';
import configureStore from './store';

const store = configureStore({});
store.dispatch(fetchPostsAndUsers());
store.subscribe(() => console.log('state changed', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);