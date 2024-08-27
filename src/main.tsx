import { createRoot } from "react-dom/client";
import "./index.css";

const app = createRoot(document.getElementById("root") as HTMLElement);

app.render(<h1 className="text-3xl">Test</h1>);
