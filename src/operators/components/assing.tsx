import React from "react";
import { useState, useEffect } from "react";
import { AssignMethod } from "./assignMethod";
interface Iassign {
  children: JSX.Element;
}

export const Assign = ({ children }: Iassign) => {
  React.Children.forEach(children, (element) => {
    if (!React.isValidElement(element)) return;
    console.log("element", element.props);
  });
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [structureEqual, setStructureEqual] = useState({});

  useEffect(() => {
    if (left.length !== 0 && right.length !== 0) {
      setStructureEqual({
        assign: [JSON.parse(left), JSON.parse(right)]
      });
    }
  }, [left, right]);

  useEffect(() => {
    console.log("structureEqual: ", structureEqual);
  }, [structureEqual]);

  const onchangeLeftInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let valueLeft = event.target.value;
    setLeft(valueLeft);
  };

  return (
    <>
      <AssignMethod onchangeLeftInput={onchangeLeftInput}>
        {children}
      </AssignMethod>
    </>
  );
};
