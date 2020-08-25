import { FETCH_USER_SUCCESS, CREATE_USER } from '../types';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return [...state, action.result];

    case CREATE_USER: {
      const { type, ...user } = action;
      return [...state, user];
    }

    default:
      return state;
  }
}