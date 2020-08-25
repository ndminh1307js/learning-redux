import { CREATE_USER } from '../types';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case CREATE_USER: {
      const { type, ...user } = action;
      return [...state, user];
    }

    default:
      return state;
  }
}