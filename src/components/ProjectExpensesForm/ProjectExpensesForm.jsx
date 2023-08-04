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
//components
import PriceInput from "./PriceInput";
import PercentageInput from "./PercentageInput";
const formLabelStyle = {
  marginBottom: "1px",
  fontWeight: "bold",
  fontStyle: "italic",
  color: " 	#FF954F",
};
const inputGroupStyle = {
  border: "1px gray",
};
function ProjectExpensesForm() {
  return (
    <Stack
      spacing={2}
      mx={{ base: "1rem", md: "5rem", lg: "15rem", xl: "30rem" }}
      mt={5}
    >
      <PriceInput priceLabel="Approved Budget Contract" />
      <PriceInput priceLabel="Quoted Price" />
      <PriceInput priceLabel="Total Cost of Equipment/Goods" />
      <SimpleGrid columns={{ base: 3 }} spacing={3}>
        {/* Tax */}
        <PercentageInput percentageLabel="Tax" />
        {/* Labor */}
        <PercentageInput percentageLabel="Labor" />
        {/* Overhead */}
        <PercentageInput percentageLabel="Overhead" />
      </SimpleGrid>
      {/* incentives */}
      {/* <Box position="relative" my={5}>
        <Divider />
        <AbsoluteCenter>Incentives</AbsoluteCenter>
      </Box> */}
      <SimpleGrid columns={{ base: 2 }} spacing={3} mb={5}>
        <Box>
          <FormLabel style={formLabelStyle}>Agency:</FormLabel>
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
      <SimpleGrid columns={{ base: 2 }} spacing={3}>
        <Box>
          <FormLabel style={formLabelStyle}>Other Suppliers:</FormLabel>
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
    </Stack>
  );
}

export default ProjectExpensesForm;
