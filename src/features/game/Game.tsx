import { useEffect } from "react";
import Board from "./Board";
import { useGame } from "../../context/GameContext";
import Result from "./Result";
import { useScores } from "../../hooks/useScores";
import { useAuth } from "../../context/AuthContext";

export default function Game() {
  const { turn, winner } = useGame();
  const { saveScore } = useScores();
  const { user } = useAuth();

  useEffect(() => {
    if (winner && user) {
      saveScore(user.uid, winner, user.email);
    }
  }, [winner, user, saveScore]);

  if (winner) {
    return <Result />;
  }

  return (
    <div className="container text-center mt-5">
      <h2>Turn: {turn}</h2>
      <Board />
    </div>
  );
}
