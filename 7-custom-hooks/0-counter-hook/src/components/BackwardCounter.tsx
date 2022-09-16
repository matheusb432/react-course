import { useCounter } from '../hooks';

import Card from './Card';

const BackwardCounter = () => {
  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  // NOTE refactoring the above code to use the custom hook
  const { counter } = useCounter(-1);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
