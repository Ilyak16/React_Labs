import React from 'react';
import './App.css';
import { Square } from './Lab_1/Square';
import { OnlyEven } from './Lab_1/OnlyEven';
import { Temperature } from './Lab_1/Temperature';
import { ColorButton } from './Lab_1/ColorButton';

function App() {
  return (
    <div>
      <h1>Задача 1: Square</h1>
      <Square n={3} />
      
      <h1>Задача 2: OnlyEven</h1>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
      
      <h1>Задача 3: Temperature</h1>
      <Temperature t={451} />
      <Temperature t={-10} />
      
      <h1>Задача 4: ColorButton</h1>
      <ColorButton />
    </div>
  );
}









export default App;
