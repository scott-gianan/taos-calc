import { Stack, Input, Box, Divider, FormLabel } from "@chakra-ui/react";
const formLabelStyle = {
  marginBottom: "1px",
  fontWeight: "bold",
  fontStyle: "italic",
  color: " 	#FF954F",
};
const inputStyle = {
  border: "1px solid gray",
};
function ProjectInformationForm() {
  return (
    <Stack
      spacing={2}
      mx={{ base: "1rem", md: "5rem", lg: "15rem", xl: "30rem" }}
    >
      <Box>
        <FormLabel style={formLabelStyle}>Name of Agency:</FormLabel>
        <Input style={inputStyle} type="email" />
      </Box>
      <Box>
        <FormLabel style={formLabelStyle}>Project Title:</FormLabel>
        <Input style={inputStyle} type="text" />
      </Box>
      <Box>
        <FormLabel style={formLabelStyle}>Approved Budget Contract:</FormLabel>
        <Input style={inputStyle} type="number" />
      </Box>
    </Stack>
  );
}

export default ProjectInformationForm;
