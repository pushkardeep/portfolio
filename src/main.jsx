import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LoadingProvider } from "./context/canvas-loading.context.jsx";
import { LoadingScreenProvider } from "./context/loading-screen.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <LoadingScreenProvider>
      <App />
    </LoadingScreenProvider>
  </LoadingProvider>
);
