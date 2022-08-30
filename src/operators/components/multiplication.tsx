import { useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Operator } from "./operator";

export const Multiplication = () => {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [structureMultiplication, setStructureMultiplication] = useState({});

  useEffect(() => {
    if (left.length !== 0 && right.length !== 0) {
      setStructureMultiplication({
        mul: [JSON.parse(left), JSON.parse(right)]
      });
    }
  }, [left, right]);

  useEffect(() => {
    console.log("structureMultiplication: ", structureMultiplication);
  }, [structureMultiplication]);

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
        <ClearIcon />
      </Operator>
    </>
  );
};
