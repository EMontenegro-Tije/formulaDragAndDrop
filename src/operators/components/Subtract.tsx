import { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { Operator } from "./operator";

export const Subtract = () => {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [structureSubtract, setStructureSubtract] = useState({});

  useEffect(() => {
    if (left.length !== 0 && right.length !== 0) {
      setStructureSubtract({
        sub: [JSON.parse(left), JSON.parse(right)]
      });
    }
  }, [left, right]);

  useEffect(() => {
    console.log("structureSubtract: ", structureSubtract);
  }, [structureSubtract]);

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
        <RemoveIcon />
      </Operator>
    </>
  );
};
