import calcResult from "../assets/calcResult";
import { useState } from "react";
import { initialData } from "../assets/data";
import { useProjectDataContext } from "../context/ProjectDataProvider";
function useResult() {
  const [result, setResult] = useState({});
  const { projectData, onChangeHandlers } = useProjectDataContext();
  const { handleResetFields } = onChangeHandlers;
  function handleResult() {
    setResult(() => {
      return calcResult(projectData);
    });
  }
  const onReset = () => {
    handleResetFields(initialData);
    setResult({});
  };

  return {
    result,
    handleResult,
    onReset,
  };
}

export default useResult;
