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
function PriceInput({ priceData, priceOnChange }) {
  const { id, value, name, label } = priceData;
  return (
    <Box>
      <FormLabel htmlFor={name} style={formLabelStyle}>
        {label}:
      </FormLabel>
      <InputGroup style={inputGroupStyle}>
        <InputLeftAddon>₱</InputLeftAddon>
        <Input
          id={id}
          type="number"
          value={value}
          onChange={priceOnChange}
          name={name}
          pattern="[0-9]"
        />
      </InputGroup>
    </Box>
  );
}

export default PriceInput;
