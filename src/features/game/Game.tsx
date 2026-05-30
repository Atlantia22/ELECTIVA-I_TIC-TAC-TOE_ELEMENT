import Board from "./Board";
import { useGame } from "../../context/GameContext";
import Result from "./Result";
import { useScores } from "../../hooks/useScores";
import { useAuth } from "../../context/AuthContext";

export default function Game() {
  const { turn, winner } = useGame();
  const { saveScore } = useScores();
  const { user } = useAuth();

  // Cuando haya ganador, guardar en Firestore
  if (winner) {
    if (user) {
      saveScore(user.uid, winner);
    }
    return <Result />;
  }

  return (
    <div className="container text-center mt-5">
      <h2>Turn: {turn}</h2>
      <Board />
    </div>
  );
}
