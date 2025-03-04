import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter((prev) => prev + 1);
  const decrementCounter = () => setCounter((prev) => prev - 1);

  return { counter, incrementCounter, decrementCounter };
};
