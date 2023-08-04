import { Stack, SimpleGrid } from "@chakra-ui/react";

//components
import PriceInput from "./PriceInput";
import PercentageInput from "./ExpensePercentageInput";
import IncentivePercentageInput from "./IncentivePercentageInput";

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
        <PercentageInput percentageLabel="Tax" />
        <PercentageInput percentageLabel="Labor" />
        <PercentageInput percentageLabel="Overhead" />
      </SimpleGrid>
      <IncentivePercentageInput incentiveLabel="Agency" />
      <IncentivePercentageInput incentiveLabel="Other Suppliers" />
    </Stack>
  );
}

export default ProjectExpensesForm;
{
  /* <Box position="relative" my={5}>
        <Divider />
        <AbsoluteCenter>Incentives</AbsoluteCenter>
      </Box> */
}
