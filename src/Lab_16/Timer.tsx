import React, { useState, useEffect } from 'react';
export const BirthTimer = () => {
  const [birthDate, setBirthDate] = useState('');
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!birthDate) return;
    const interval = setInterval(() => {
      const diff = (Date.now() - new Date(birthDate).getTime()) / 1000;
      setSeconds(Math.floor(diff));
    }, 1000);
    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div>
      <input type="date" onChange={(e) => setBirthDate(e.target.value)} />
      <p>Вы прожили: {seconds} секунд.</p>
    </div>
  );
};
