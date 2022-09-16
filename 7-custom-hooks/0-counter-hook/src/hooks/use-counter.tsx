import { useEffect, useState } from 'react';

// NOTE creating a custom hook to use in the ForwardCounter and BackwardCounter components
const useCounter = (step: number) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + step);
    }, 1000);

    return () => clearInterval(interval);
  }, [step]);

  return { counter };
};

export { useCounter };
