import { Tr, Td } from "@chakra-ui/react";
function TableRow({ detail, amount }) {
  return (
    <Tr>
      <Td>{detail}</Td>
      <Td>₱ {amount}</Td>
    </Tr>
  );
}
export default TableRow;
