import { combineReducers } from 'redux';
import { CREATE_POST, EDIT_POST, SET_FILTER } from './types';

const initialState = {
  posts: [],
  filter: 'all'
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST: {
      const { type, ...post } = action;
      return { ...state, posts: [...state.posts, post] };
    }
    case EDIT_POST: {
      const { type, id, ...newPost } = action;
      return {
        ...state,
        posts: state.posts.map((post, index) =>
          index === id
            ? { ...post, ...newPost }
            : post)
      }
    }
    case SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

const appReducer = combineReducers({
  postData: postsReducer
});

export default appReducer;