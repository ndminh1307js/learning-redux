import { CREATE_POST, EDIT_POST, DELETE_POST } from '../types';

export const createPost = (user, post) => {
  const { title, text, category = 'random' } = post;

  if (!title || !text) {
    throw new Error('Invalid post, title and text required');
  }

  return {
    type: CREATE_POST,
    post: { user, title, text, category }
  }
};

export const editPost = (id, post) => ({
  type: EDIT_POST,
  id,
  post
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  id
});