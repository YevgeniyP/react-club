import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./components/App/App";
import { StrictMode } from "react";

const app = createRoot(document.getElementById("root") as HTMLElement);

app.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
