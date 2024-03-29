import { useEffect } from "react";
import "./App.css";
import useTelegram from "./hooks/useTelegram";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  const tg = useTelegram();

  useEffect(() => {
    if (tg) {
      tg.ready();
    }
  }, [tg]);

  return <RouterProvider router={router} />;
}

export default App;
