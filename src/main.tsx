import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers/AppRouter";
import { GameProvider } from "./context/GameContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameProvider>
      <AppRouter />
    </GameProvider>
  </React.StrictMode>
);
