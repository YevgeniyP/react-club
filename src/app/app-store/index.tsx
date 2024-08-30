import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

// interface AppStoreInterface extends PropsWithChildren {}

export default function AppStore({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
