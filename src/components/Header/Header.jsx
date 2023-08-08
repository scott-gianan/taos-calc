import { Box, useColorMode, Flex, Spacer } from "@chakra-ui/react";
import ColorModeComponent from "../ColorModeComponent";

export default function Header() {
  const { colorMode } = useColorMode();
  const headerStyle = {
    borderBottom: colorMode === "dark" && "1px solid gray",
  };

  return (
    <>
      <Box
        bg={colorMode === "light" ? "orange.500" : ""}
        w="100%"
        p={4}
        style={headerStyle}
      >
        <Flex
          justifyItems={"space-between"}
          align={"center"}
          mx={{ base: "0.25rem", md: "5rem", lg: "15rem", xl: "30rem" }}
        >
          <ColorModeComponent />
          <Spacer />
          <p>© Scott Russell R. Gianan</p>
        </Flex>
      </Box>
    </>
  );
}
