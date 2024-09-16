import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AgoraProvider } from "./context/AgoraContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AgoraProvider>
        <App />
      </AgoraProvider>
    </BrowserRouter>
  </StrictMode>
);
