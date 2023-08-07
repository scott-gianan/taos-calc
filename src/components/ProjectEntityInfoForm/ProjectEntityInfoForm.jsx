import { Stack } from "@chakra-ui/react";
import TextInput from "./TextInput";
//custom hooks
import { useProjectDataContext } from "../../context/ProjectDataProvider";
function ProjectEntityInfoForm() {
  const { projectData, onChangeHandlers } = useProjectDataContext();
  const { handleAgencyValue, handleProjectTitleValue } = onChangeHandlers;
  const { agency, projectTitle } = projectData;
  return (
    <Stack
      spacing={2}
      mx={{ base: "1rem", md: "5rem", lg: "15rem", xl: "30rem" }}
    >
      <TextInput data={agency} onChangeHandler={handleAgencyValue} />

      <TextInput
        data={projectTitle}
        onChangeHandler={handleProjectTitleValue}
      />
    </Stack>
  );
}

export default ProjectEntityInfoForm;
