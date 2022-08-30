import Box from "@mui/material/Box";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Columns } from "./../contracts/columns";

export const OperatorColumn = ({ column, items }: Columns) => {
  return (
    <div>
      <h3> {column.title} </h3>
      <Droppable droppableId={column.id}>
        {(droppableProvider) => (
          <div
            style={{ margin: "10px" }}
            {...droppableProvider.droppableProps}
            ref={droppableProvider.innerRef}
          >
            {items?.map((item, i) => {
              console.log("item", item);

              return (
                <Draggable draggableId={`${item.id}`} index={i} key={item.id}>
                  {(draggableProvider) => (
                    <Box style={{ margin: "10px" }}>
                      <div
                        {...draggableProvider.draggableProps}
                        ref={draggableProvider.innerRef}
                        {...draggableProvider.dragHandleProps}
                      >
                        {item.components}
                      </div>
                    </Box>
                  )}
                </Draggable>
              );
            })}
            {droppableProvider.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
