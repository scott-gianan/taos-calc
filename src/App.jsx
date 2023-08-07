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
function App() {
  return (
    <>
      <Header />
      <ProjectEntityInfoForm />
      <ProjectExpensesForm />
      <br />
      <button className="calc-btn">Calculate</button>
      <TableResult />
    </>
  );
}

export default App;
