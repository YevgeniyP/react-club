import AppRouter from "../app-router";
import AppStore from "../app-store";

export default function App() {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
}
