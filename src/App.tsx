import React from 'react';
import './App.css';

import Countdown from './Lab_2/Countdown';
import Stopwatch from './Lab_2/Stopwatch';
import PrimeNumbers from './Lab_2/PrimeNumbers';
import TrafficLight from './Lab_2/TrafficLight';
import Revert from './Lab_2/Revert';

function App() {
  return (
    <div>
      <hr />
      <h1>Lab 2 - Задача 1: Countdown</h1>
      <Countdown />

      <h1>Lab 2 - Задача 2: Stopwatch</h1>
      <Stopwatch />

      <h1>Lab 2 - Задача 3: Prime Numbers</h1>
      <PrimeNumbers />

      <h1>Lab 2 - Задача 4: Traffic Light</h1>
      <TrafficLight />

      <h1>Lab 2 - Задача 5: Revert</h1>
      <Revert s="привет!" />
    </div>
  );
}









export default App;
