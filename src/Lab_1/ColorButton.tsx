import { useState } from 'react';

export const ColorButton: React.FC = () => {
  const [isGreen, setIsGreen] = useState(false);

  const handleClick = () => {
    setIsGreen(!isGreen);
  };

  const buttonStyle = {
    backgroundColor: isGreen ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Нажми меня!
    </button>
  );
};