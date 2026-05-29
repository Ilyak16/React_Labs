type SquareProps = {
  n: number;
};

export const Square: React.FC<SquareProps> = ({ n }) => {
  return <div>{n * n}</div>;
};