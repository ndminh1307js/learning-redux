import React from 'react';

export function Post({ user, text }) {
  return <p><b>{user}</b> - {text}</p>
}