import {
  Stack,
  Input,
  Box,
  InputGroup,
  FormLabel,
  SimpleGrid,
  InputRightElement,
  InputLeftAddon,
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
function ProjectExpensesForm() {
  return (
    <Stack
      spacing={2}
      mx={{ base: "1rem", md: "5rem", lg: "15rem", xl: "30rem" }}
      mt={5}
    >
      {/* Quoted Price */}
      <Box>
        <FormLabel style={formLabelStyle}>Quoted Price:</FormLabel>
        <InputGroup style={inputGroupStyle}>
          <InputLeftAddon>₱</InputLeftAddon>
          <Input type="number" />
        </InputGroup>
      </Box>
      {/* Cost of Equipment */}
      <Box>
        <FormLabel style={formLabelStyle}>
          Total Cost of Equipment/Goods:
        </FormLabel>
        <InputGroup style={inputGroupStyle}>
          <InputLeftAddon>₱</InputLeftAddon>
          <Input type="number" />
        </InputGroup>
      </Box>

      <SimpleGrid columns={{ base: 3 }} spacing={3}>
        {/* Tax */}
        <Box>
          <FormLabel style={formLabelStyle}>Tax:</FormLabel>
          <InputGroup style={inputGroupStyle}>
            <Input type="number" />
            <InputRightElement>
              <AiOutlinePercentage />
            </InputRightElement>
          </InputGroup>
        </Box>
        {/* Labor */}
        <Box>
          <FormLabel style={formLabelStyle}>Labor:</FormLabel>
          <InputGroup style={inputGroupStyle}>
            <Input type="number" />
            <InputRightElement>
              <AiOutlinePercentage />
            </InputRightElement>
          </InputGroup>
        </Box>
        {/* Overhead */}
        <Box>
          <FormLabel style={formLabelStyle}>Overhead:</FormLabel>
          <InputGroup style={inputGroupStyle}>
            <Input type="number" />
            <InputRightElement>
              <AiOutlinePercentage />
            </InputRightElement>
          </InputGroup>
        </Box>
      </SimpleGrid>
      {/* incentives */}
      <Box position="relative" my={5}>
        <Divider />
        <AbsoluteCenter>Incentives</AbsoluteCenter>
      </Box>
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
