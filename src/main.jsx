import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes";
import GlobalStyles from "./styles/global";
import { Routes } from "./Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes/>
    </ThemeProvider>
  </React.StrictMode>
);
