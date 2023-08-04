import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";
import TableRow from "./TableRow";
function TableResult() {
  const trStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
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
            <TableRow detail="Quoted Price" amount="Q.P AMt" />
            <TableRow detail="Net Amt. (after taxes)" amount="After Taxes" />
            <TableRow
              detail="Total Cost of Equipment/Goods"
              amount="After Taxes"
            />
            <TableRow detail="Revenue" amount="Revenue" />
          </Tbody>
        </Table>
      </TableContainer>
      {/* Result 2 */}
      <TableContainer>
        <Table size="lg" variant="striped">
          <TableCaption placement="top">Business Expense</TableCaption>
          <Tbody>
            <TableRow detail="Labor" amount="Labor" />
            <TableRow detail="Overhead" amount="OH" />
            <TableRow detail="Business Expense Total" amount="B.E" />
          </Tbody>
        </Table>
      </TableContainer>
      {/* Result 3 */}
      <TableContainer>
        <Table size="lg" variant="striped">
          <TableCaption placement="top">Other Expense</TableCaption>

          <Tbody>
            <TableRow detail="Agency's Incentive" amount="Agency In" />
            <TableRow detail="Supplier's Incentive" amount="S.I" />
            <TableRow detail="Other Expenses Total" amount="O.E" />
          </Tbody>
        </Table>
      </TableContainer>
      {/* Profit */}
      <TableContainer>
        <Table size="lg" variant="striped">
          <TableCaption placement="top">Net Amount Profit</TableCaption>

          <Tbody>
            <TableRow detail="Actual Net Profit" amount="Net Profit" />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableResult;
