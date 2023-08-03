import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  Divider,
  AbsoluteCenter,
  TableContainer,
} from "@chakra-ui/react";
import TableRow from "./TableRow";
function TableResult() {
  return (
    <>
      <Box position="relative" my={5}>
        <Divider />
        <AbsoluteCenter>Result</AbsoluteCenter>
      </Box>
      <TableContainer>
        <Table size="md" variant={"striped"}>
          <Thead>
            <Tr>
              <Th>Details</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <TableRow detail="Quoted Price" amount="Q.P AMt" />
            <TableRow detail="Net Amt. (after taxes)" amount="Net" />
            <TableRow detail="Total Cost of Goods" amount="After Taxes" />
            <TableRow detail="Revenue" amount="Revenue" />
          </Tbody>
        </Table>
      </TableContainer>
      {/* Business Expense */}
      <Box position="relative" my={5}>
        <Divider />
        <AbsoluteCenter>Business Expense</AbsoluteCenter>
      </Box>
      <TableContainer>
        <Table size="md" variant={"striped"}>
          <Tbody>
            <TableRow detail="Labor" amount="Labor" />
            <TableRow detail="Overhead" amount="OH" />
            <TableRow detail="Business Expense Total" amount="Revenue" />
          </Tbody>
        </Table>
      </TableContainer>
      {/* Other Expense */}
      <Box position="relative" my={5}>
        <Divider />
        <AbsoluteCenter>Other Expense</AbsoluteCenter>
      </Box>
      <TableContainer>
        <Table size="md" variant={"striped"}>
          <Tbody>
            <TableRow detail="Agency's Incentive" amount="Agency In" />
            <TableRow detail="Supplier's Incentive" amount="S.I" />
            <TableRow detail="Other Expenses Total" amount="O.E" />
          </Tbody>
        </Table>
      </TableContainer>
      {/* Actual Net Profit */}
      <Box position="relative" my={5}></Box>
      <TableContainer>
        <Table size="md" variant={"striped"}>
          <Tbody>
            <TableRow detail="Actual Net Profit" amount="Net Profit" />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableResult;
