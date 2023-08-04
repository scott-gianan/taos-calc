import {
  Input,
  Box,
  InputGroup,
  FormLabel,
  InputLeftAddon,
} from "@chakra-ui/react";
const formLabelStyle = {
  marginBottom: "1px",
  fontWeight: "bold",
  fontStyle: "italic",
  color: " 	#FF954F",
};
const inputGroupStyle = {
  border: "1px gray",
};
function PriceInput({ priceLabel, priceValue, priceOnChange }) {
  return (
    <Box>
      <FormLabel style={formLabelStyle}>{priceLabel}:</FormLabel>
      <InputGroup style={inputGroupStyle}>
        <InputLeftAddon>₱</InputLeftAddon>
        <Input type="number" />
      </InputGroup>
    </Box>
  );
}

export default PriceInput;
