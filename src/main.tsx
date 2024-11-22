import "./index.css";

import { createRoot } from "react-dom/client";

import { Root } from "./app";

const root = document.getElementById("root") as HTMLElement;
const app = createRoot(root);
app.render(<Root />);
