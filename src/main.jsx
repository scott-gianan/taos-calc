import React from "react";
import ReactDOM from "react-dom/client";
//components
import App from "./App.jsx";
//styling
import "./index.css";
//libraries
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
