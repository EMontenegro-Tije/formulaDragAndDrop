import { useState, useEffect } from "react";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { Operator } from "./operator";

export const Div = () => {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [structureDiv, setStructureDiv] = useState({});

  useEffect(() => {
    if (left.length !== 0 && right.length !== 0) {
      setStructureDiv({
        truediv: [JSON.parse(left), JSON.parse(right)]
      });
    }
  }, [left, right]);

  useEffect(() => {
    console.log("structureMultiplication: ", structureDiv);
  }, [structureDiv]);

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
        <ShowChartIcon />
      </Operator>
    </>
  );
};
