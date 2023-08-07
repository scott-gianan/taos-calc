import { Stack, SimpleGrid } from "@chakra-ui/react";
//custom hooks
import { useProjectDataContext } from "../../context/ProjectDataProvider";
//components
import PriceInput from "./PriceInput";
import PercentageInput from "./ExpensePercentageInput";
import IncentivePercentageInput from "./IncentivePercentageInput";

function ProjectExpensesForm() {
  const { projectData, onChangeHandlers } = useProjectDataContext();
  const {
    approvedBudgetContract,
    quotedPrice,
    costOfGoods,
    businessPercentage,
  } = projectData;
  const { tax, labor, overhead } = businessPercentage;
  //eventhandlers
  const {
    handleApprovedBudgetContractValue,
    handleQuotedPriceValue,
    handleCostOfGoodsValue,
    handleLaborPercentageValue,
    handleOverheadPercentageValue,
  } = onChangeHandlers;
  return (
    <Stack
      spacing={2}
      mx={{ base: "1rem", md: "5rem", lg: "15rem", xl: "30rem" }}
      mt={5}
    >
      <PriceInput
        priceData={approvedBudgetContract}
        priceOnChange={handleApprovedBudgetContractValue}
      />
      <PriceInput
        priceData={quotedPrice}
        priceOnChange={handleQuotedPriceValue}
      />
      <PriceInput
        priceData={costOfGoods}
        priceOnChange={handleCostOfGoodsValue}
      />

      <SimpleGrid columns={{ base: 3 }} spacing={3}>
        <PercentageInput percentData={tax} isDisabled={true} />
        <PercentageInput
          percentData={labor}
          percentOnChange={handleLaborPercentageValue}
        />
        <PercentageInput
          percentData={overhead}
          percentOnChange={handleOverheadPercentageValue}
        />
      </SimpleGrid>
      {/* <IncentivePercentageInput incentiveLabel="Agency" />
      <IncentivePercentageInput incentiveLabel="Associate Supplier/s" />  */}
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
