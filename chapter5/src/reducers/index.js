import { combineReducers } from 'redux';

import userReducer from './user';
import postReducer from './post';
import filterReducer from './filter';

const appReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  filter: filterReducer
});

export default appReducer;