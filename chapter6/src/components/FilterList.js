import React from 'react';
import { Filter } from './Filter';

export function FilterList({ categories, setFilter, clearFilter }) {
  return <span>
    {categories.map((c, i) =>
      <span key={i.toString()}>
        <Filter name={c} onClick={() => setFilter(c)} />
        {' - '}
      </span>
    )}
    <button onClick={clearFilter}>Clear</button>
  </span>
}