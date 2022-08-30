import { useState, useEffect } from "react";
import { Operator } from "./operator";
import ShortTextIcon from "@mui/icons-material/ShortText";

export const Equal = () => {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [structureEqual, setStructureEqual] = useState({});

  useEffect(() => {
    if (left.length !== 0 && right.length !== 0) {
      setStructureEqual({
        eq: [JSON.parse(left), JSON.parse(right)]
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
        <ShortTextIcon />
      </Operator>
    </>
  );
};
