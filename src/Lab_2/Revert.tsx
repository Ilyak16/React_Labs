import { useEffect, useState } from 'react';

interface RevertProps {
  s: string;
}

function Revert({ s }: RevertProps) {
  const [text, setText] = useState(s);

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prev) => {
        if (prev.length <= 1) return prev;
        return prev[prev.length - 1] + prev.slice(0, -1);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{text}</div>;
}

export default Revert;