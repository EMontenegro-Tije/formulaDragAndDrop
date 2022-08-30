import Box from "@mui/material/Box";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Columns } from "./../contracts/columns";
export const FormulaColumn = ({ column, items }: Columns) => {
  return (
    <div>
      <h3> {column.title} </h3>
      <Box
        style={{
          minWidth: "550px",
          minHeight: "350px",
          height: "auto",
          width: "auto",
          backgroundColor: "lightgray",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px"
        }}
      >
        <Box
          style={{
            minWidth: "500px",
            minHeight: "300px",
            height: "auto",
            width: "auto",
            backgroundColor: "white",
            borderRadius: "10px"
          }}
        >
          <Droppable droppableId={column.id}>
            {(droppableProvider) => (
              <div
                style={{ margin: "10px" }}
                {...droppableProvider.droppableProps}
                ref={droppableProvider.innerRef}
              >
                {items?.map((item, i) => (
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
                ))}
                {droppableProvider.placeholder}
              </div>
            )}
          </Droppable>
        </Box>
      </Box>
    </div>
  );
};
