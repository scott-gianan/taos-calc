export const initialData = {
  agency: {
    id: "agencyName",
    value: "",
    label: "Agency Name",
    name: "agencyName",
  },
  projectTitle: {
    id: "projectTitle",
    value: "",
    label: "Project Title",
    name: "projectTitle",
  },
  approvedBudgetContract: {
    id: "approvedBudgetContract",
    value: "",
    name: "approvedBudgetContract",
    label: "Approved Budget Contract",
  },
  quotedPrice: {
    id: "quotedPrice",
    value: "",
    name: "quotedPrice",
    label: "Quoted Price",
  },
  costOfGoods: {
    id: "totalCostOfGoods",
    value: "",
    name: "totalCostOfGoods",
    label: "Total Cost of Goods",
  },
  businessPercentage: {
    tax: {
      id: "taxPercent",
      value: 4,
      name: "taxPercent",
      label: "Tax",
    },
    labor: {
      id: "laborPercent",
      value: "",
      name: "laborPercent",
      label: "Labor",
    },
    overhead: {
      id: "overheadPercent",
      value: "",
      name: "overheadPercent",
      label: "Overhead",
    },
  },
  incentivesPercentage: {
    agency: {
      id: "agencyPercent",
      value: "",
      name: "agencyPercent",
      label: "Agency",
      basis: "quotedPrice",
    },
    supplier: {
      id: "associateSupplier",
      value: "",
      name: "associateSupplier",
      label: "Associate Supplier",
      basis: "quotedPrice",
    },
  },
};

// percentages: {
//     business: [
//       {
//         id: "taxPercentage",
//         value: "",
//         name: "taxPercentage",
//       },
//       {
//         id: "laborPercentage",
//         value: "",
//         name: "laborPercentage",
//       },
//       {
//         id: "overheadPercentage",
//         value: "",
//         name: "overheadPercentage",
//       },
//     ],
//     incentives: [
//       {
//         id: "agencyPercent",
//         value: "",
//         name: "agencyPercent",
//       },
//       {
//         id: "associateSupplier",
//         value: "",
//         name: "associateSupplier",
//       },
//     ],
//   },
// Quoted Price = quotedPrice,
// Net Amt. (after taxes) = quotedPrice*(taxPercent/100)
// Total Cost of Equipment/Goods = totalCostOfGoods
// Revenue = quotedPrice – totalCostOfGoods
// Labor = quotedPrice*(laborPercent/100)
// Overhead = overheadPercent*(laborPercent/100)
// Business Expense Total = laborCost
