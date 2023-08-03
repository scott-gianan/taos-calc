//components
import ProjectInformationForm from "./components/ProjectInformationForm/ProjectInformationForm";
import ProjectExpensesForm from "./components/ProjectExpensesForm/ProjectExpensesForm";
import Header from "./components/Header/Header";
import TableResult from "./components/TableResult/TableResult";
//styling
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* <ProjectInformationForm /> */}
      <ProjectExpensesForm />
      <TableResult />
    </>
  );
}

export default App;
