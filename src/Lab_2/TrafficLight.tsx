import { useEffect, useState } from 'react';

function TrafficLight() {
  const [light, setLight] = useState<'red' | 'yellow' | 'green'>('red');

  useEffect(() => {
    const timer = setInterval(() => {
      setLight((prev) => {
        if (prev === 'red') return 'green';
        if (prev === 'green') return 'yellow';
        return 'red';
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getLightColor = () => {
    switch (light) {
      case 'red':
        return '#ff0000';
      case 'yellow':
        return '#ffff00';
      case 'green':
        return '#00ff00';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', backgroundColor: '#333', borderRadius: '10px', width: '100px' }}>
      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: light === 'red' ? getLightColor() : '#555',
          transition: 'background-color 0.3s',
        }}
      />
      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: light === 'yellow' ? getLightColor() : '#555',
          transition: 'background-color 0.3s',
        }}
      />
      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: light === 'green' ? getLightColor() : '#555',
          transition: 'background-color 0.3s',
        }}
      />
    </div>
  );
}

export default TrafficLight;