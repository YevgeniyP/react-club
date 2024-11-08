import "./index.css";

import { createRoot } from "react-dom/client";

const root = document.getElementById("root") as HTMLElement;
const app = createRoot(root);
app.render(<div className="text-3xl">app</div>);
