import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../features/game/Home";
import Game from "../features/game/Game";
import Result from "../features/game/Result";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
