import { Box, useColorMode, Flex, Spacer } from "@chakra-ui/react";
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
      <Flex justifyItems={"space-between"}>
        <ColorModeComponent />
        <Spacer />
        <p style={{ color: "orange" }}>© Scott Russell R. Gianan</p>
      </Flex>
    </Box>
  );
}
