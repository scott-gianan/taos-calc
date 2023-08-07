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
  const agencyIncentive = (basis = data.incentivePercentage.agency.basis) => {
    if (basis === "quotedPrice") {
      return quotedPrice * (data.incentivePercentage.agency.value / 100);
    }
    if (basis === "afterTaxNet") {
      return (
        newAmountAfterTaxes * (data.incentivePercentage.agency.value / 100)
      );
    }
    if (basis === "approvedBudgetContract") {
      return (
        approvedBudgetContract * (data.incentivePercentage.agency.value / 100)
      );
    }
    return 0;
  };
  const supplierIncentive = (
    basis = data.incentivePercentage.supplier.basis
  ) => {
    if (basis === "quotedPrice") {
      return quotedPrice * (data.incentivePercentage.supplier.value / 100);
    }
    if (basis === "afterTaxNet") {
      return (
        newAmountAfterTaxes * (data.incentivePercentage.supplier.value / 100)
      );
    }
    if (basis === "approvedBudgetContract") {
      return (
        approvedBudgetContract * (data.incentivePercentage.supplier.value / 100)
      );
    }
    return 0;
  };
  const netProfit =
    quotedPrice -
    (newAmountAfterTaxes +
      businessExpenseTotal +
      agencyIncentive +
      supplierIncentive);
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
    agencyIncentive,
    supplierIncentive,
    netProfit,
  };
}

export default calcResult;
