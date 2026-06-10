import React, { useState } from 'react';

export const BaseConverter = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);

  // Вычисляем результат: переводим строку в число из fromBase, 
  // а затем приводим к строке в toBase
  const getResult = () => {
    if (!inputNumber) return '';
    const decimalValue = parseInt(inputNumber, fromBase);
    if (isNaN(decimalValue)) return 'Ошибка ввода';
    return decimalValue.toString(toBase).toUpperCase();
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Конвертер систем счисления</h3>
      
      <div>
        <input 
          placeholder="Введите число" 
          value={inputNumber} 
          onChange={(e) => setInputNumber(e.target.value)} 
        />
        
        <select onChange={(e) => setFromBase(Number(e.target.value))} value={fromBase}>
          <option value={2}>Система: 2</option>
          <option value={10}>Система: 10</option>
          <option value={16}>Система: 16</option>
        </select>
      </div>

      <div style={{ marginTop: '10px' }}>
        <span>Целевая система: </span>
        <select onChange={(e) => setToBase(Number(e.target.value))} value={toBase}>
          <option value={2}>2</option>
          <option value={10}>10</option>
          <option value={16}>16</option>
        </select>
      </div>

      <div style={{ marginTop: '15px', fontWeight: 'bold' }}>
        Результат: {getResult()}
      </div>
    </div>
  );
};
