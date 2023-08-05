export const projectData = {
  entity: [
    { id: "agencyName", value: "", name: "agencyName" },
    { id: "projectTitle", value: "", name: "projectTitle" },
  ],
  financial: [
    { id: "approvedBudgetContract", value: "", name: "approvedBudgetContract" },
    { id: "quotedPrice", value: "", name: "quotedPrice" },
    { id: "totalCostOfGoods", value: "", name: "totalCostOfGoods" },
  ],
  percentages: {
    business: [
      {
        id: "taxPercentage",
        value: "",
        name: "taxPercentage",
      },
      {
        id: "laborPercentage",
        value: "",
        name: "laborPercentage",
      },
      {
        id: "overheadPercentage",
        value: "",
        name: "overheadPercentage",
      },
    ],
    incentives: [
      {
        id: "agencyPercent",
        value: "",
        name: "agencyPercent",
      },
      {
        id: "associateSupplier",
        value: "",
        name: "associateSupplier",
      },
    ],
  },
};

// Quoted Price = quotedPrice,
// Net Amt. (after taxes) = quotedPrice*(taxPercent/100)
// Total Cost of Equipment/Goods = totalCostOfGoods
// Revenue = quotedPrice – totalCostOfGoods
// Labor = quotedPrice*(laborPercent/100)
// Overhead = overheadPercent*(laborPercent/100)
// Business Expense Total = laborCost
