import { useState, createContext } from "react";
import { data } from "../assets/data";
export const ProjectContext = createContext();

function DataProvider({ children }) {
  const [projectData, setProjectData] = useState(data);
  const handleEntityValues = (event) => {
    setProjectData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleFinancialValues = (event) => {
    setProjectData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: Number(event.target.value),
      };
    });
  };
  const values = {
    projectData,
    onChangeHandlers: {
      handleEntityValues,
      handleFinancialValues,
    },
  };
  return (
    <ProjectContext.Provider value={values}>{children}</ProjectContext.Provider>
  );
}
export default DataProvider;
