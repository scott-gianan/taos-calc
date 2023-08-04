import { useState, createContext } from "react";
import { projectData } from "../assets/data";
export const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState(projectData);
  const handleProjectDescription = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleMonetaryValue = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: Number(event.target.value),
      };
    });
  };
  const values = {
    data,
    handleProjectDescription,
    handleMonetaryValue,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}

export default DataProvider;
