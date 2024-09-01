import { Outlet } from "react-router-dom";
import Header from "../../widgets/header";
import { Suspense } from "react";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
