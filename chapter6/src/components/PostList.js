import React from 'react';
import { Post } from './Post';
import { Loading } from './Loading';

export function PostList({ posts, isLoading }) {
  return isLoading ? <Loading /> : (
    <ul>
      {
        posts.map((post, index) => <Post key={index} {...post} />)
      }
    </ul>
  )
}