import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayoutLazy } from "../../layouts";
import { ShopPageLazy } from "../../pages";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayoutLazy />,
    children: [
      {
        index: true,
        path: "",
        element: <Navigate to={"shop"} />,
      },
      {
        path: "shop",
        element: <ShopPageLazy />,
      },
    ],
  },
]);
