import React from 'react';
import './App.css';
import { CitySelector } from './Lab_16/CitySelector';
import { SimpleCalc } from './Lab_16/FormsCalc';
import { BaseConverter } from './Lab_16/Converter';
import { BirthTimer } from './Lab_16/Timer';
import { FilterList } from './Lab_16/Filter_list';
import { RegistrationForm } from './Lab_16/Register';
import { EditProfileForm } from './Lab_16/EditProfileForm';

function App() {
  const sectionStyle: React.CSSProperties = {
    padding: '20px',
    margin: '20px 0',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Лабораторная работа: Формы и валидация</h1>

      <section style={sectionStyle}>
        <h2>1. Выбор города</h2>
        <CitySelector />
      </section>

      <section style={sectionStyle}>
        <h2>2. Калькулятор</h2>
        <SimpleCalc />
      </section>

      <section style={sectionStyle}>
        <h2>3. Конвертер систем счисления</h2>
        <BaseConverter />
      </section>

      <section style={sectionStyle}>
        <h2>4. Таймер даты рождения</h2>
        <BirthTimer />
      </section>

      <section style={sectionStyle}>
        <h2>5. Список с фильтрацией</h2>
        <FilterList />
      </section>

      <section style={sectionStyle}>
        <h2>6. Форма регистрации</h2>
        <RegistrationForm />
      </section>

      <section style={sectionStyle}>
        <h2>7. Форма редактирования</h2>
        <EditProfileForm />
      </section>
    </div>
  );
}

export default App;

