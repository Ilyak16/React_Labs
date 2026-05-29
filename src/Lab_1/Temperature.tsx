type TemperatureProps = {
  t: number;
};

export const Temperature: React.FC<TemperatureProps> = ({ t }) => {
  const color = t < 0 ? 'blue' : 'red';
  
  return (
    <div style={{ color }}>
      {t}°C
    </div>
  );
};