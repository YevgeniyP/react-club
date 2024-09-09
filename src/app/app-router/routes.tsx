import { MainLayoutLazy } from "@/layouts";
import { ShopPageLazy } from "@/pages";
import { createBrowserRouter, Navigate } from "react-router-dom";

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
