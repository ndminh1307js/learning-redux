import React from 'react';
import { ConnectedPostList } from './containers/ConnectedPostList';
import { ConnectedFilterList } from './containers/ConnectedFilterList';
import { DevTools } from './containers/DevTools';

const App = () =>
  <div>
    <h1>React/Redux Blog Application</h1>
    <div><ConnectedFilterList /></div>
    <div><ConnectedPostList /></div>
    {process.env.NODE_ENV !== 'production' && <DevTools />}
  </div>

export default App;