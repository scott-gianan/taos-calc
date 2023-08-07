import { createContext, useContext } from "react";
import { data } from "../assets/data";
import { useImmer } from "use-immer";
const ProjectDataContext = createContext();

export function ProjectDataProvider({ children }) {
  const [projectData, setProjectData] = useImmer(data);
  const handleAgencyValue = (event) => {
    setProjectData((draft) => {
      draft.agency.value = event.target.value;
    });
  };
  const handleProjectTitleValue = (event) => {
    setProjectData((draft) => {
      draft.projectTitle.value = event.target.value;
    });
  };
  const handleApprovedBudgetContractValue = (event) => {
    setProjectData((draft) => {
      if (event.target.value === "") {
        draft.approvedBudgetContract.value = "";
      } else {
        draft.approvedBudgetContract.value = Number(event.target.value);
      }
    });
  };
  const handleQuotedPriceValue = (event) => {
    setProjectData((draft) => {
      if (event.target.value === "") {
        draft.quotedPrice.value = "";
      } else {
        draft.quotedPrice.value = Number(event.target.value);
      }
    });
  };
  const handleCostOfGoodsValue = (event) => {
    setProjectData((draft) => {
      if (event.target.value === "") {
        draft.costOfGoods.value = "";
      } else {
        draft.costOfGoods.value = Number(event.target.value);
      }
    });
  };
  // const handleFinancialValues = (event) => {
  //   setProjectData((prevData) => {
  //     return {
  //       ...prevData,
  //       [event.target.name]: Number(event.target.value),
  //     };
  //   });
  // };
  const values = {
    projectData,
    onChangeHandlers: {
      handleAgencyValue,
      handleProjectTitleValue,
      handleApprovedBudgetContractValue,
      handleQuotedPriceValue,
      handleCostOfGoodsValue,
    },
  };
  return (
    <ProjectDataContext.Provider value={values}>
      {children}
    </ProjectDataContext.Provider>
  );
}
export function useProjectDataContext() {
  const { projectData, onChangeHandlers } = useContext(ProjectDataContext);
  return {
    projectData,
    onChangeHandlers,
  };
}
