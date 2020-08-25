import { FETCH_POSTS_SUCCESS, CREATE_POST, EDIT_POST, DELETE_POST } from '../types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.result;

    case CREATE_POST: {
      const { post } = action;
      const ts = Date.now();
      return [...state, { ...post, created: ts, updated: ts }];
    }

    case EDIT_POST: {
      const { id, post } = action;
      const ts = Date.now();
      return state.map((oldPost, index) =>
        index === id
          ? { ...oldPost, ...post, updated: ts }
          : oldPost)
    }

    case DELETE_POST: {
      const { id } = action;
      return state.filter((post, index) => index !== id);
    }

    default:
      return state;
  }
}