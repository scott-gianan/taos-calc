import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";
const trStyle = {
  display: "flex",
  justifyContent: "space-between",
};
import TableRow from "./TableRow";
function TableResult({ result }) {
  const {
    quotedPrice,
    totalCostOfGoods,
    netAmountAfterTaxes,
    revenue,
    laborCost,
    overheadCost,
    businessExpenseTotal,
    netProfit,
    agencyIncentive,
    supplierIncentive,
    otherExpenseTotal,
  } = result;
  return (
    <>
      {/* Result 1 */}
      <TableContainer>
        <Table size="lg" variant="striped">
          <TableCaption placement="top">Results</TableCaption>
          <Thead>
            <Tr style={trStyle}>
              <Th>Details</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <TableRow detail="Quoted Price" amount={quotedPrice} />
            <TableRow
              detail="Net Amt. (after taxes)"
              amount={netAmountAfterTaxes}
            />
            <TableRow
              detail="Total Cost of Equipment/Goods"
              amount={totalCostOfGoods}
            />
            <TableRow detail="Revenue" amount={revenue} />
          </Tbody>
        </Table>
      </TableContainer>
      {/* Result 2 */}
      <TableContainer>
        <Table size="lg" variant="striped">
          <TableCaption placement="top">Business Expense</TableCaption>
          <Tbody>
            <TableRow detail="Labor" amount={laborCost} />
            <TableRow detail="Overhead" amount={overheadCost} />
            <TableRow
              detail="Business Expense Total"
              amount={businessExpenseTotal}
            />
          </Tbody>
        </Table>
      </TableContainer>
      {/* Result 3 */}
      <TableContainer>
        <Table size="lg" variant="striped">
          <TableCaption placement="top">Other Expense</TableCaption>
          <Tbody>
            <TableRow detail="Agency's Incentive" amount={agencyIncentive} />
            <TableRow
              detail="Supplier's Incentive"
              amount={supplierIncentive}
            />
            <TableRow
              detail="Other Expenses Total"
              amount={otherExpenseTotal}
            />
          </Tbody>
        </Table>
      </TableContainer>
      {/* Profit */}
      <TableContainer>
        <Table size="lg" variant="striped">
          <TableCaption placement="top">Profit</TableCaption>

          <Tbody>
            <TableRow detail="Net Profit" amount={netProfit} />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableResult;
