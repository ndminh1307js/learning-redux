import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appReducer from './reducers';
import { createUser, createPost } from './actions';
import App from './App';

let store = createStore(appReducer);

// create user
store.dispatch(createUser('dan', 'daniel bugl'));
store.dispatch(createUser('damie', 'Dang Minh Ngo'));

// create post
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

console.log('initial state: ', store.getState());

store.subscribe(() => console.log('state changed', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);