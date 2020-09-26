import React, { useState } from "react";
import { IProps, Issue, One, Two } from "../components";

const IndexPage = () => {
  const [state, setState] = useState<number>(1);

  const props: IProps = { title: `WELCOME ${state}` };
  return (
    <>
      <h1>Hello to dynamic hooks playground</h1>
      {state === 1 && <One {...props} />}
      {state === 1 && <Two {...props} />}
      {state !== 1 && Issue(props)}
      <button onClick={() => setState((prev: number) => (prev === 1 ? 2 : 1))}>
        Switch
      </button>
    </>
  );
};

export default IndexPage;
