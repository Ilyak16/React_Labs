import { useEffect, useState } from 'react';

function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) return;

    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return <div>{count}</div>;
}

export default Countdown;