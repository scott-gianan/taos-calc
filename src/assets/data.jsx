export const projectData = {
  agencyName: "",
  projectTitle: "",
  approvedBudgetContract: "",
  quotedPrice: "",
  totalCostOfGoods: "",
  taxPercentage: "",
  laborPercentage: "",
  laborCost: "",
  overheadPercent: "",
  overheadCost: "",
  agencyPercent: "",
  agencyPercentageBasis: "",
  otherSuppliersPercent: "",
  otherSuppliersPercentageBasis: "",
};
// Quoted Price = quotedPrice,
// Net Amt. (after taxes) = quotedPrice*(taxPercent/100)
// Total Cost of Equipment/Goods = totalCostOfGoods
// Revenue = quotedPrice – totalCostOfGoods
// Labor = quotedPrice*(laborPercent/100)
// Overhead = overheadPercent*(laborPercent/100)
// Business Expense Total = laborCost
