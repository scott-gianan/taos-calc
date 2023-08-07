function calcResult(data) {
  const agencyName = data.agency.value;
  const projectTitle = data.projectTitle.value;
  const approvedBudgetContract = data.approvedBudgetContract.value;
  const quotedPrice = data.quotedPrice.value;
  const totalCostOfGoods = data.costOfGoods.value;
  const netAmountAfterTaxes = quotedPrice * 0.96;
  const revenue = quotedPrice - totalCostOfGoods;
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
        netAmountAfterTaxes * (data.incentivesPercentage.agency.value / 100)
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
        netAmountAfterTaxes * (data.incentivesPercentage.supplier.value / 100)
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

  const otherExpenseTotal = agencyIncentive() + supplierIncentive();

  return {
    quotedPrice,
    totalCostOfGoods,
    netAmountAfterTaxes,
    revenue,
    laborCost,
    overheadCost,
    businessExpenseTotal,
    netProfit:
      netAmountAfterTaxes -
      (totalCostOfGoods + otherExpenseTotal + businessExpenseTotal),
    agencyIncentive: agencyIncentive(),
    supplierIncentive: supplierIncentive(),
    otherExpenseTotal,
  };
}

export default calcResult;
