import { AppLazy } from "@/app";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const app = createRoot(document.getElementById("root") as HTMLElement);

app.render(
  <StrictMode>
    <Suspense fallback={<div>LOADING...</div>}>
      <AppLazy />
    </Suspense>
  </StrictMode>,
);
