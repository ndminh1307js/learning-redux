import { SET_FILTER, CLEAR_FILTER } from '../types';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter
});

export const clearFilter = () => ({
  type: CLEAR_FILTER
});