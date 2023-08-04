import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

function useProjectContext() {
  const { data, handleProjectDescription, handleMonetaryValue } =
    useContext(DataContext);
  return {
    data,
    handleProjectDescription,
    handleMonetaryValue,
  };
}

export default useProjectContext;
