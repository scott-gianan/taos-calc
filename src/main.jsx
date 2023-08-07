import React from "react";
import ReactDOM from "react-dom/client";
//components
import App from "./App.jsx";
//styling
import "./index.css";
//libraries
import { ChakraProvider } from "@chakra-ui/react";
//context
import { ProjectDataProvider } from "./context/ProjectDataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ProjectDataProvider>
        <App />
      </ProjectDataProvider>
    </ChakraProvider>
  </React.StrictMode>
);
