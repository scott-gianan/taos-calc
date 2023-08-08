import { useRef } from "react";
import {
  Box,
  useColorMode,
  Flex,
  Spacer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import ColorModeComponent from "../ColorModeComponent";
import SavedDataDrawer from "../SavedDataDrawer/SavedDataDrawer";
export default function Header() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
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
          <Button colorScheme="green" ref={btnRef} onClick={onOpen}>
            <RxHamburgerMenu />
          </Button>
        </Flex>
      </Box>
      <SavedDataDrawer
        isDrawerOpen={isOpen}
        onDrawerClose={onClose}
        finalFocusRef={btnRef}
      />
    </>
  );
}
