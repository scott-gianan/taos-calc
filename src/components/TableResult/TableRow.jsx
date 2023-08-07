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
      <Td style={tdStyle}>
        ₱{" "}
        {amount
          .toLocaleString("en-US", {
            style: "decimal",
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })
          .replace(/,/g, ", ")}
      </Td>
    </Tr>
  );
}
export default TableRow;
