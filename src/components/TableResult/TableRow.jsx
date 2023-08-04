import { Tr, Td } from "@chakra-ui/react";
const trStyle = {
  display: "flex",
  justifyContent: "space-between",
};
function TableRow({ detail, amount }) {
  return (
    <Tr style={trStyle}>
      <Td>{detail}</Td>
      <Td>₱ {amount}</Td>
    </Tr>
  );
}
export default TableRow;
