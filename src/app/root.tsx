import { FC } from "react";

import { MainPage } from "@/pages";
import { Footer, Header } from "@/widgets";

const Root: FC = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export { Root };
