import React, { useEffect, useState } from "react";
import { IProps } from ".";

export const Two = ({ title = "Default of Two" }: IProps) => {
  const [counter, setCounter] = useState<number>(1);
  const [state, setState] = useState<string>("");

  useEffect(() => {
    setState(`Counter =  ${counter}`);
  }, [counter]);

  return (
    <div>
      <h2>Two</h2>
      <h3>{title}</h3>
      <h4>{state}</h4>
      <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
      <hr />
    </div>
  );
};
