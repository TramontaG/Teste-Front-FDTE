import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style.css";

// This become necessary starting on V6.0 to avoid junk warnings on console.
// https://github.com/styled-components/styled-components/issues/4049
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
