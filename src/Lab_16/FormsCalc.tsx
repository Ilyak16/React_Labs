import React, { useState, useEffect } from 'react';
export const SimpleCalc = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [op, setOp] = useState('+');
  
  const res = op === '+' ? n1 + n2 : op === '-' ? n1 - n2 : op === '*' ? n1 * n2 : n1 / n2;

  return (
    <div>
      <input type="number" onChange={(e) => setN1(+e.target.value)} />
      <select onChange={(e) => setOp(e.target.value)}>
        <option>+</option><option>-</option><option>*</option><option>/</option>
      </select>
      <input type="number" onChange={(e) => setN2(+e.target.value)} />
      <span> = {res}</span>
    </div>
  );
};
