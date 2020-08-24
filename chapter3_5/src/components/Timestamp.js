import React from 'react';

export function Timestamp({ data }) {
  const d = new Date(data);
  return <p>{d.toUTCString()}</p>
}