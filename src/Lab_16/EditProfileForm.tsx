import React, { useState } from 'react';

export const EditProfileForm = () => {
  const [data, setData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    address: ''
  });
  const [error, setError] = useState('');

  const validate = () => {
    // 1. Проверка обязательных полей
    if (!data.firstName || !data.middleName || !data.lastName) {
      return "Имя, Отчество и Фамилия обязательны для заполнения";
    }

    // 2. Валидация даты (опционально: если введена, то должна соответствовать формату)
    if (data.birthDate) {
      const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
      if (!dateRegex.test(data.birthDate)) {
        return "Дата рождения должна быть в формате ДД.ММ.ГГГГ";
      }
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
    } else {
      setError('');
      alert('Профиль успешно обновлен!');
      console.log('Данные:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
      <input placeholder="Имя *" onChange={(e) => setData({...data, firstName: e.target.value})} />
      <input placeholder="Отчество *" onChange={(e) => setData({...data, middleName: e.target.value})} />
      <input placeholder="Фамилия *" onChange={(e) => setData({...data, lastName: e.target.value})} />
      <input placeholder="Дата рождения (ДД.ММ.ГГГГ)" onChange={(e) => setData({...data, birthDate: e.target.value})} />
      <input placeholder="Адрес" onChange={(e) => setData({...data, address: e.target.value})} />
      
      <button type="submit">Сохранить</button>
      {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
    </form>
  );
};
