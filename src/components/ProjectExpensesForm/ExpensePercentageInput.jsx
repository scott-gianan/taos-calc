import {
  Input,
  Box,
  InputGroup,
  FormLabel,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlinePercentage } from "react-icons/ai";
const formLabelStyle = {
  marginBottom: "1px",
  fontWeight: "bold",
  fontStyle: "italic",
  color: " 	#FF954F",
};
const inputGroupStyle = {
  border: "1px gray",
};
function ExpensePercentageInput({
  percentData,
  isDisabled = false,
  percentOnChange,
}) {
  const { id, value, name, label } = percentData;
  return (
    <Box>
      <FormLabel htmlFor={name} style={formLabelStyle}>
        {label}:
      </FormLabel>
      <InputGroup style={inputGroupStyle}>
        <Input
          type="number"
          id={id}
          value={value}
          name={name}
          onChange={percentOnChange}
          pattern="[0-9]"
          disabled={isDisabled}
          max={100}
        />
        <InputRightElement>
          <AiOutlinePercentage />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default ExpensePercentageInput;
