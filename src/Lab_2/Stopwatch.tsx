import { useEffect, useState } from 'react';

function Stopwatch() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setIsRunning(true)}>Start</button>
    </div>
  );
}

export default Stopwatch;