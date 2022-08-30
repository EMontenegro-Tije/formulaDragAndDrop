import { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Operator } from "./operator";
export const Sum = () => {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [structureSum, setStructureSum] = useState({});

  useEffect(() => {
    if (left.length !== 0 && right.length !== 0) {
      setStructureSum({
        add: [JSON.parse(left), JSON.parse(right)]
      });
    }
  }, [left, right]);

  useEffect(() => {
    console.log("structureSum: ", structureSum);
  }, [structureSum]);

  const onchangeLeftInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let valueLeft = event.target.value;
    setLeft(valueLeft);
  };

  const onchangeRightInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let valueRight = event.target.value;
    setRight(valueRight);
  };

  return (
    <>
      <Operator
        onchangeLeftInput={onchangeLeftInput}
        onchangeRightInput={onchangeRightInput}
      >
        <AddIcon />
      </Operator>
    </>
  );
};
