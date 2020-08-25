import { CREATE_USER } from '../types';

export const createUser = (username, realname) => ({
  type: CREATE_USER,
  username,
  realname
});