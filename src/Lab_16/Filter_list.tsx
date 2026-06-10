import React, { useState } from 'react';
export const FilterList = () => {
  const [nums, setNums] = useState([1, 13, 6, 52, 4, 14]);
  const [val, setVal] = useState('');
  const [filter, setFilter] = useState<'all' | 'even' | 'odd'>('all');

  const filtered = nums.filter(n => 
    filter === 'all' ? true : filter === 'even' ? n % 2 === 0 : n % 2 !== 0
  );

  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => setNums([...nums, +val])}>[+]</button>
      <div>
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('even')}>Четные</button>
        <button onClick={() => setFilter('odd')}>Нечетные</button>
      </div>
      <ul>{filtered.map((n, i) => <li key={i}>{n}</li>)}</ul>
    </div>
  );
};
