import React from 'react';

export function Filter({ name, onClick }) {
  return <button onClick={onClick}>{name}</button>
}