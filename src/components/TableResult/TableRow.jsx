import { Tr, Td } from "@chakra-ui/react";
const trStyle = {
  display: "flex",
  justifyContent: "space-between",
};
const tdStyle = {
  width: "50%",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  whiteSpace: "normal",
};
function TableRow({ detail, amount }) {
  return (
    <Tr style={trStyle}>
      <Td style={tdStyle}>{detail}</Td>
      <Td style={tdStyle}>₱ {amount}</Td>
    </Tr>
  );
}
export default TableRow;
