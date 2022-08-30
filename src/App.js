import React, { useState, useEffect } from "react";
import "./styles.css";
import { Sum } from "./operators/components/sum";
import { Subtract } from "./operators/components/Subtract";
import { Multiplication } from "./operators/components/multiplication";
import { Div } from "./operators/components/div";
import { Assign } from "./operators/components/assing";
import { DragDropContext } from "@hello-pangea/dnd";
import { OperatorColumn } from "./dragAndDrop/OperatorColumn";
import { FormulaColumn } from "./dragAndDrop/FormulaColumn";
export default function App() {
  const [operators, setOperators] = useState(init_state);

  const reorderColumnList = (sourceCol, startIndex, endIndex) => {
    const newTaskIds = Array.from(sourceCol.operatorsIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);

    const newColumn = {
      ...sourceCol,
      operatorsIds: newTaskIds
    };

    return newColumn;
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the user drops within the same column but in a different positoin
    const sourceCol = operators.columns[source.droppableId];
    const destinationCol = operators.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...operators,
        columns: {
          ...operators.columns,
          [newColumn.id]: newColumn
        }
      };
      setOperators(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.operatorsIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      operatorsIds: startTaskIds
    };

    const endTaskIds = Array.from(destinationCol.operatorsIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      operatorsIds: endTaskIds
    };

    const newState = {
      ...operators,
      columns: {
        ...operators.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }
    };

    setOperators(newState);
  };

  const columnOperatorOrderId = operators.columnOrder[0];
  const columnOperator = operators.columns[columnOperatorOrderId];

  const columnFormulaOrderId = operators.columnOrder[1];
  const columnFormula = operators.columns[columnFormulaOrderId];
  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <OperatorColumn
          key={columnOperatorOrderId}
          column={columnOperator}
          items={columnOperator.operatorsIds.map(
            (operatorId) => operators.operator[operatorId]
          )}
        />
        {/* {} */}
        <FormulaColumn
          key={columnFormulaOrderId}
          column={columnFormula}
          items={columnFormula.operatorsIds.map(
            (operatorId) => operators.operator[operatorId]
          )}
        />
      </DragDropContext>
    </div>
  );
}

const init_state = {
  operator: {
    1: { id: 1, components: <Multiplication /> },
    2: { id: 2, components: <Subtract /> },
    3: { id: 3, components: <Sum /> },
    4: { id: 4, components: <Div /> },
    5: { id: 5, components: <Assign> </Assign> }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Operadores",
      operatorsIds: [1, 2, 3, 4, 5]
    },
    "column-2": {
      id: "column-2",
      title: "Formula",
      operatorsIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"]
};
