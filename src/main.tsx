import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";

import { App } from "./app";

const app = createRoot(document.getElementById("root") as HTMLElement);

app.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
