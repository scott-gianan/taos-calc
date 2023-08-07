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
  const handleLaborPercentageValue = (event) => {
    setProjectData((draft) => {
      if (event.target.value === "") {
        draft.businessPercentage.labor.value = "";
      } else {
        if (event.target.value <= 100) {
          draft.businessPercentage.labor.value = Number(event.target.value);
        }
      }
    });
  };
  const handleOverheadPercentageValue = (event) => {
    setProjectData((draft) => {
      if (event.target.value === "") {
        draft.businessPercentage.overhead.value = "";
      } else {
        if (event.target.value <= 100) {
          draft.businessPercentage.overhead.value = Number(event.target.value);
        }
      }
    });
  };
  const handleAgencyIncentivePercentage = (event) => {
    setProjectData((draft) => {
      if (event.target.value === "") {
        draft.incentivesPercentage.agency.value = "";
      } else {
        if (event.target.value <= 100) {
          draft.incentivesPercentage.agency.value = Number(event.target.value);
        }
      }
    });
  };
  const handleAgencyIncentiveBasis = (event) => {
    setProjectData((draft) => {
      draft.incentivesPercentage.agency.basis = event.target.value;
    });
  };
  const handleSupplierIncentivePercentage = (event) => {
    setProjectData((draft) => {
      if (event.target.value === "") {
        draft.incentivesPercentage.supplier.value = "";
      } else {
        if (event.target.value <= 100) {
          draft.incentivesPercentage.supplier.value = Number(
            event.target.value
          );
        }
      }
    });
  };
  const handleSupplierIncentiveBasis = (event) => {
    setProjectData((draft) => {
      draft.incentivesPercentage.supplier.basis = event.target.value;
    });
  };
  const handleResetFields = (data) => {
    setProjectData(data);
  };
  const values = {
    projectData,
    onChangeHandlers: {
      handleAgencyValue,
      handleProjectTitleValue,
      handleApprovedBudgetContractValue,
      handleQuotedPriceValue,
      handleCostOfGoodsValue,
      handleLaborPercentageValue,
      handleOverheadPercentageValue,
      handleAgencyIncentivePercentage,
      handleAgencyIncentiveBasis,
      handleSupplierIncentivePercentage,
      handleSupplierIncentiveBasis,
      handleResetFields,
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
