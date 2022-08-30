import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ShortTextIcon from "@mui/icons-material/ShortText";
interface IassignMethod {
  onchangeLeftInput: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  children: JSX.Element;
}

export const AssignMethod = ({
  onchangeLeftInput,
  children
}: IassignMethod) => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          backgroundColor: "yellowGreen",
          width: "450px",
          alignItems: "center",
          padding: "10px 10px 10px 10px",
          borderRadius: "10px"
        }}
      >
        <Box
          style={{
            width: "150px",
            backgroundColor: "white",
            borderRadius: "10px"
          }}
        >
          <TextField onChange={onchangeLeftInput} />
        </Box>
        <Box
          style={{
            width: "50px"
          }}
        >
          <ShortTextIcon />
        </Box>
        <Box
          style={{
            width: "auto",
            backgroundColor: "white",
            borderRadius: "10px"
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
