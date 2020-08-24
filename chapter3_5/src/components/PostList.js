import React from 'react';
import { Post } from './Post';

export function PostList({ postData: { posts } }) {
  return <ul>
    {
      posts.map((post, index) => <Post key={index} {...post} />)
    }
  </ul>
}