import { Tr, Td } from "@chakra-ui/react";
const trStyle = {
  display: "flex",
  justifyContent: "space-between",
  // border: "1px solid tomato",
};
const amountStyle = {
  width: "50%",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "normal",
  // border: "1px solid tomato",
  padding: "2%",
  fontSize: "120%",
};
const detailStyle = {
  width: "50%",
  display: "flex",
  flexWrap: "wrap",
  whiteSpace: "normal",
  padding: "2.5%",
  fontSize: "120%",
};
function TableRow({ detail, amount = 0 }) {
  return (
    <Tr style={trStyle}>
      <Td style={detailStyle}>{detail}</Td>
      <Td style={amountStyle}>
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
