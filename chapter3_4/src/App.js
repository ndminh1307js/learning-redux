import React, { Component } from 'react';
import { createStore } from 'redux';
import appReducer from './reducers';
import { createPost } from './actions';
import { ConnectedPostList } from './containers/ConnectedPostList';

let store = createStore(appReducer);

store.dispatch(createPost('des', 'try it for free'));

setTimeout(() => {
  store.dispatch(createPost('dan', 'something new in this post'));
}, 1000);

export default class App extends Component {
  render() {
    return <ConnectedPostList store={store} />
  }
};