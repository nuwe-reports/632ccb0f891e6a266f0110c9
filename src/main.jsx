import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RickAndMortyApp } from "./RickAndMortyApp";
import { AppTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <RickAndMortyApp />
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>
);
