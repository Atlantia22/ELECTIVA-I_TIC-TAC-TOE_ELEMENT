import { useGame } from "../../context/GameContext";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Result() {
  const { winner, resetGame } = useGame();
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">
        {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
      </h2>
      <Link to="/">
        <Button variant="primary" onClick={resetGame}>Play Again</Button>
      </Link>
    </div>
  );
}
