import {
  Stack,
  Input,
  Box,
  InputGroup,
  FormLabel,
  SimpleGrid,
  InputRightElement,
  Divider,
  AbsoluteCenter,
  Select,
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
function IncentivePercentageInput({
  incentiveLabel,
  incentiveValue,
  incentiveOnChange,
}) {
  return (
    <SimpleGrid columns={{ base: 2 }} spacing={3} mb={5}>
      <Box>
        <FormLabel style={formLabelStyle}>{incentiveLabel}:</FormLabel>
        <InputGroup style={inputGroupStyle}>
          <Input type="number" />
          <InputRightElement>
            <AiOutlinePercentage />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box>
        <FormLabel style={formLabelStyle}>Percentage Basis:</FormLabel>
        <Select style={{ border: "1px solid gray" }}>
          <option value="option1">Quoted Price</option>
          <option value="option2">After Tax Net</option>
          <option value="option3">ABC</option>
        </Select>
      </Box>
    </SimpleGrid>
  );
}

export default IncentivePercentageInput;
