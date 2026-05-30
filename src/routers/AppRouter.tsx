// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Game from "../features/game/Game";
import LeaderBoard from "../features/board/LeaderBoard";
import Login from "../features/auth/login";
import Register from "../features/auth/register";
import PrivateRoute from "../components/PrivateRoute";
import Home from "../features/Home/home";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route
            path="/game"
            element={
              <PrivateRoute>
                <Game />
              </PrivateRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <PrivateRoute>
                <LeaderBoard />
              </PrivateRoute>
            }
          />


          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

