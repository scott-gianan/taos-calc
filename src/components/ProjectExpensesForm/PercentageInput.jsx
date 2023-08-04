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
function PercentageInput({
  percentageLabel,
  percentageValue,
  percentageOnChange,
}) {
  return (
    <Box>
      <FormLabel style={formLabelStyle}>{percentageLabel}:</FormLabel>
      <InputGroup style={inputGroupStyle}>
        <Input type="number" />
        <InputRightElement>
          <AiOutlinePercentage />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default PercentageInput;
