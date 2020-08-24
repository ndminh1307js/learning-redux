import { SET_FILTER, CLEAR_FILTER } from '../types';

export default function filterReducer(state = 'all', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    case CLEAR_FILTER:
      return 'all';
    default:
      return state;
  }
}