import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import { AppProvider } from "./context";

ReactDOM.render(
  <Suspense fallback={<div>Loading</div>}>
    <AppProvider>
      <App />
    </AppProvider>
  </Suspense>,
  document.getElementById("root")
);
