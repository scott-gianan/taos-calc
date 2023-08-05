import { useContext } from "react";
import { ProjectContext } from "../context/DataProvider";
export const useProjectContext = () => {
  const { projectData, onChangeHandlers } = useContext(ProjectContext);
  return {
    projectData,
    onChangeHandlers,
  };
};

export default useProjectContext;
