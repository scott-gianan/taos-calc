import React from "react";
import { Input, FormLabel, Box } from "@chakra-ui/react";
const formLabelStyle = {
  marginBottom: "1px",
  fontWeight: "bold",
  fontStyle: "italic",
  color: " 	#FF954F",
};
const inputStyle = {
  border: "1px solid gray",
};
function TextInput({ data, onChangeHandler }) {
  const { id, name, value, label } = data;

  return (
    <Box>
      <FormLabel htmlFor={id} style={formLabelStyle}>
        {label}:
      </FormLabel>
      <Input
        style={inputStyle}
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
    </Box>
  );
}
export default TextInput;
