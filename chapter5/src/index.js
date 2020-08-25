import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createUser, createPost } from './actions';
import App from './App';
import configureStore from './store';

const store = configureStore({});

const initialState = store.getState();
// create user
if (!initialState.users || initialState.users.length === 0) {
  store.dispatch(createUser('dan', 'daniel bugl'));
  store.dispatch(createUser('damie', 'Dang Minh Ngo'));
}

// create post
if (!initialState.posts || initialState.posts.length === 0) {
  store.dispatch(createPost('dan', {
    title: 'First post',
    text: 'Hello world! This is the first blog post',
    category: 'welcome'
  }));

  store.dispatch(createPost('damie', {
    title: 'Another post',
    text: 'This is another blog post',
    category: 'test'
  }));
}

store.subscribe(() => console.log('state changed', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);