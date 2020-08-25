import { combineReducers } from 'redux';

import userReducer from './user';
import postReducer from './post';
import filterReducer from './filter';
import loadingReducer from './loading';

const appReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  filter: filterReducer,
  loading: loadingReducer
});

export default appReducer;