import { useEffect, useState } from 'react';

function PrimeNumbers() {
  const [primes, setPrimes] = useState<number[]>([]);
  const [currentNum, setCurrentNum] = useState(2);

  const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      let next = currentNum;
      while (!isPrime(next)) {
        next++;
      }
      setPrimes((prev) => [...prev, next]);
      setCurrentNum(next + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentNum]);

  return <div>{primes.join(', ')}</div>;
}

export default PrimeNumbers;