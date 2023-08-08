//chakraUI
import { Button, Flex, Box, Center } from "@chakra-ui/react";
//components
import ProjectEntityInfoForm from "./components/ProjectEntityInfoForm/ProjectEntityInfoForm";
import ProjectExpensesForm from "./components/ProjectExpensesForm/ProjectExpensesForm";
import Header from "./components/Header/Header";
import TableResult from "./components/TableResult/TableResult";
//styling
import "./App.css";
//custom hooks
import useResult from "./hooks/useResult";
function App() {
  const { result, handleResult, onReset } = useResult();

  return (
    <>
      <Header />
      <ProjectEntityInfoForm />
      <ProjectExpensesForm />
      <Flex
        justify={"space-between"}
        gap={5}
        mb={5}
        mx={{ base: "1rem", md: "5rem", lg: "15rem", xl: "30rem" }}
      >
        <Button colorScheme="red" variant="outline" onClick={onReset}>
          Reset Fields
        </Button>
        <Button colorScheme="messenger" onClick={handleResult} variant="solid">
          Calculate
        </Button>
      </Flex>
      <Box mx={{ base: "0.25rem", md: "5rem", lg: "15rem", xl: "30rem" }}>
        <TableResult result={result} />
      </Box>

      <Center mt={2}>
        <Button colorScheme="teal" variant="outline">
          Save
        </Button>
      </Center>
    </>
  );
}

export default App;
