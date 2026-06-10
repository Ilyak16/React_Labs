import React, { useState, useEffect } from 'react';

export const CitySelector = () => {
  const [city, setCity] = useState('');
  return (
    <div>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">Выберите город</option>
        <option value="Москва">Москва</option>
        <option value="Рио">Рио</option>
      </select>
      {city && city !== 'Рио' && <p>Нет, это не Рио-де-Жанейро!</p>}
    </div>
  );
};