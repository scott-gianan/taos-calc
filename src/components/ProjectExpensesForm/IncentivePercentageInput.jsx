import {
  Input,
  Box,
  InputGroup,
  FormLabel,
  SimpleGrid,
  InputRightElement,
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
  incentiveData,
  incentiveOnChange,
  incentiveBasisOnChange,
  isABCPresent,
}) {
  const { id, value, name, label, basis } = incentiveData;
  return (
    <SimpleGrid columns={{ base: 2 }} spacing={3} mb={5}>
      <Box>
        <FormLabel htmlFor={name} style={formLabelStyle}>
          {label}:
        </FormLabel>
        <InputGroup style={inputGroupStyle}>
          <Input
            type="number"
            id={id}
            value={value}
            onChange={incentiveOnChange}
            pattern="[0-9]"
          />
          <InputRightElement>
            <AiOutlinePercentage />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box>
        <FormLabel style={formLabelStyle}>Percentage Basis:</FormLabel>
        <Select
          style={{ border: "1px solid gray" }}
          value={basis}
          onChange={incentiveBasisOnChange}
        >
          <option value="quotedPrice">Quoted Price</option>
          <option value="afterTaxNet">After Tax Net</option>
          {isABCPresent && <option value="approvedBudgetContract">ABC</option>}
        </Select>
      </Box>
    </SimpleGrid>
  );
}

export default IncentivePercentageInput;
