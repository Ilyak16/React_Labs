type OnlyEvenProps = {
  arr: number[];
};

export const OnlyEven: React.FC<OnlyEvenProps> = ({ arr }) => {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  
  return <div>{evenNumbers.join(', ')}</div>;
};