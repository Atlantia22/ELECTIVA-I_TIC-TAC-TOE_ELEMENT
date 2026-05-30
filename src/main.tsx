import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers/AppRouter";
import { GameProvider } from "./context/GameContext";
import { AuthProvider } from "./context/AuthContext"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/colors.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>  
      <GameProvider>
        <AppRouter />
      </GameProvider>
    </AuthProvider>
  </React.StrictMode>
);

