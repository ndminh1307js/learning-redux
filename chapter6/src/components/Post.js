import React from 'react';
import { User } from './User';
import { Timestamp } from './Timestamp';

export function Post({ user, title, text, category, created, updated }) {
  return <div>
    <b>{title}</b>: {text}
    <i>{' ~ '}<User {...user} /></i>
    <span>Created at: <Timestamp data={created} /></span>
    <span>Updated at: <Timestamp data={updated} /></span>
  </div>
}