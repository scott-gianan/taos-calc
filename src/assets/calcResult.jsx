function calcResult(data) {
  const agencyName = data.agency.value;
  const projectTitle = data.projectTitle.value;
  const approvedBudgetContract = data.approvedBudgetContract.value;
  const quotedPrice = data.quotedPrice.value;
  const costOfGoods = data.costOfGoods.value;
  const newAmountAfterTaxes = quotedPrice * 0.96;
  const revenue = quotedPrice - costOfGoods;
  const laborCost = quotedPrice * (data.businessPercentage.labor.value / 100);
  const overheadCost =
    quotedPrice * (data.businessPercentage.overhead.value / 100);
  const businessExpenseTotal = laborCost + overheadCost;
  const agencyIncentive = (basis = data.incentivesPercentage.agency.basis) => {
    if (basis === "quotedPrice") {
      return quotedPrice * (data.incentivesPercentage.agency.value / 100);
    }
    if (basis === "afterTaxNet") {
      return (
        newAmountAfterTaxes * (data.incentivesPercentage.agency.value / 100)
      );
    }
    if (basis === "approvedBudgetContract") {
      return (
        approvedBudgetContract * (data.incentivesPercentage.agency.value / 100)
      );
    }
    return 0;
  };
  const supplierIncentive = (
    basis = data.incentivesPercentage.supplier.basis
  ) => {
    if (basis === "quotedPrice") {
      return quotedPrice * (data.incentivesPercentage.supplier.value / 100);
    }
    if (basis === "afterTaxNet") {
      return (
        newAmountAfterTaxes * (data.incentivesPercentage.supplier.value / 100)
      );
    }
    if (basis === "approvedBudgetContract") {
      return (
        approvedBudgetContract *
        (data.incentivesPercentage.supplier.value / 100)
      );
    }
    return 0;
  };
  const netProfit =
    quotedPrice -
    (newAmountAfterTaxes +
      businessExpenseTotal +
      agencyIncentive() +
      supplierIncentive());
  return {
    agencyName,
    projectTitle,
    approvedBudgetContract,
    quotedPrice,
    costOfGoods,
    newAmountAfterTaxes,
    revenue,
    laborCost,
    overheadCost,
    businessExpenseTotal,
    netProfit,
  };
}

export default calcResult;
