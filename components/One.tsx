import React from "react";
import { IProps } from ".";

export const One = ({ title = "Default of One" }: IProps) => (
  <div>
    <h2>One</h2>
    <h3>{title}</h3>
    <hr />
  </div>
);
