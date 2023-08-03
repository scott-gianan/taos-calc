import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { BsSun, BsSunFill } from "react-icons/bs";
function ColorModeComponent() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems={"center"}>
      <Icon
        color="yellow.500"
        boxSize={6}
        mr={2}
        as={colorMode === "light" ? BsSunFill : BsSun}
      />
      <Switch
        id="color-mode"
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </Flex>
  );
}

export default ColorModeComponent;
