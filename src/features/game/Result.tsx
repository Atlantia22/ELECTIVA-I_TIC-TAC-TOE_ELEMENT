import { useGame } from "../../context/GameContext";
import { Link } from "react-router-dom";

export default function Result() {
  const { winner, resetGame } = useGame();
  return (
    <div>
      <h2>{winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}</h2>
      <button onClick={resetGame}>Play Again</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
