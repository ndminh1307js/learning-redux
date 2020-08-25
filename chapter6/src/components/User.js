import React from 'react';

export function User({ username, realname }) {
  return <p>@{username} {realname}</p>
}