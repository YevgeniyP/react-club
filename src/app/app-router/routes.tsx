import { createBrowserRouter } from "react-router-dom";
import { MainLayoutLazy } from "../../layouts";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayoutLazy />,
  },
]);
