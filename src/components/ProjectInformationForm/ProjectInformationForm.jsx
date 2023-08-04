import { Stack, Input, Box, FormLabel } from "@chakra-ui/react";
const formLabelStyle = {
  marginBottom: "1px",
  fontWeight: "bold",
  fontStyle: "italic",
  color: " 	#FF954F",
};
const inputStyle = {
  border: "1px solid gray",
};
function ProjectInformationForm({ value, onChangeHandler }) {
  const { agencyName, projectTitle, approvedBudgetContract } = value;
  return (
    <Stack
      spacing={2}
      mx={{ base: "1rem", md: "5rem", lg: "15rem", xl: "30rem" }}
    >
      <Box>
        <FormLabel htmlFor="agencyName" style={formLabelStyle}>
          Name of Agency:
        </FormLabel>
        <Input
          style={inputStyle}
          type="text"
          id="agencyName"
          name="agencyName"
          value={agencyName}
          onChange={onChangeHandler}
        />
      </Box>
      <Box>
        <FormLabel style={formLabelStyle}>Project Title:</FormLabel>
        <Input style={inputStyle} type="text" />
      </Box>
    </Stack>
  );
}

export default ProjectInformationForm;
