import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/main.css";
import RouterPage from "./pages/RouterPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterPage />
  </StrictMode>
);
