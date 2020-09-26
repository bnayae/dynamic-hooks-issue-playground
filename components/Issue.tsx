import React, { useEffect, useState } from "react";
import { IProps } from ".";

export const Issue = ({ title = "Default of Issue" }: IProps) => {
  const [counter, setCounter] = useState<number>(1);
  const [counter1, setCounter1] = useState<number>(1);
  const [state, setState] = useState<string>("");

  useEffect(() => {
    setCounter(7);
    setCounter1(2);
  }, []);

  useEffect(() => {
    setState(`Counter =  ${counter}`);
    setCounter1((prev) => prev + 2);
  }, [counter]);

  return (
    <div>
      <h2>Two</h2>
      <h3>{title}</h3>
      <h4>{state}</h4>
      <h4>Counter 1 = {counter1}</h4>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
      <hr />
    </div>
  );
};
