import { Box, useColorMode } from "@chakra-ui/react";
import ColorModeComponent from "../ColorModeComponent";
export default function Header() {
  const { colorMode } = useColorMode();
  const headerStyle = {
    borderBottom: colorMode === "dark" && "1px solid gray",
  };
  return (
    <Box
      bg={colorMode === "light" ? "orange.500" : ""}
      w="100%"
      p={4}
      style={headerStyle}
    >
      <ColorModeComponent />
    </Box>
  );
}
