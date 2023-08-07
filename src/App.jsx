import { useState } from "react";
import { Button, Flex, Box } from "@chakra-ui/react";
//components
import ProjectEntityInfoForm from "./components/ProjectEntityInfoForm/ProjectEntityInfoForm";
import ProjectExpensesForm from "./components/ProjectExpensesForm/ProjectExpensesForm";
import Header from "./components/Header/Header";
import TableResult from "./components/TableResult/TableResult";
//context

//styling
import "./App.css";
//assets
import calcResult from "./assets/calcResult";
import { useProjectDataContext } from "./context/ProjectDataProvider";
function App() {
  const { projectData } = useProjectDataContext();
  const [result, setResult] = useState({});
  function handleResult() {
    setResult(() => {
      return calcResult(projectData);
    });
  }

  return (
    <>
      <Header />
      <ProjectEntityInfoForm />
      <ProjectExpensesForm />
      <Flex justify={"center"} gap={5} mb={5}>
        <Button colorScheme="red" variant="outline">
          Reset Fields
        </Button>
        <Button colorScheme="messenger" onClick={handleResult} variant="solid">
          Calculate
        </Button>
      </Flex>
      <Box mx={{ base: "0.25rem", md: "5rem", lg: "15rem", xl: "30rem" }}>
        <TableResult result={result} />
      </Box>
    </>
  );
}

export default App;
