import React, { useState } from 'react';
export const RegistrationForm = () => {
  const [data, setData] = useState({ login: '', pass: '', confirm: '' });
  const [err, setErr] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[a-zA-Z0-9]{6,20}$/.test(data.login)) return setErr('Неверный логин');
    if (data.pass !== data.confirm) return setErr('Пароли не совпадают');
    alert('Успешно!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setData({...data, login: e.target.value})} placeholder="Логин" />
      <input type="password" onChange={(e) => setData({...data, pass: e.target.value})} />
      <input type="password" onChange={(e) => setData({...data, confirm: e.target.value})} />
      <button type="submit">Регистрация</button>
      {err && <p style={{color: 'red'}}>{err}</p>}
    </form>
  );
};
