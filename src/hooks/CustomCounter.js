import { useState } from "react";

const useCounter = (step = 1) => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + step);
  };
  const dec = () => {
    setCount(count - step);
  };
  return { inc, dec, count };
};

export default useCounter;
