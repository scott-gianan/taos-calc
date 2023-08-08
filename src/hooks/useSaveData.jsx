import { useState } from "react";

function useSaveData() {
  const [savedData, setSavedData] = useState([]);
  const handleSave = (currentData, currentResult) => {
    setSavedData((previousData) => {
      return [
        ...previousData,
        {
          id: crypto.randomUUID(),
          currentData: { ...currentData },
          results: { ...currentResult },
        },
      ];
    });
  };
  return { handleSave };
}

export default useSaveData;
