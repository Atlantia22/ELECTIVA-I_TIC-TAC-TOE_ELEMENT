import { useGame } from "../../context/GameContext";
import Navbar from "../../components/navBar";

export default function Result() {
  const { winner, resetGame } = useGame();

  return (
    <>
    <Navbar />
    <div className="container text-center mt-5">
      <h2>
        {winner === "Draw" ? "Empate" : `Winner: ${winner}`}
      </h2>
      <button onClick={resetGame} className="btn btn-primary mt-3">
        Try again
      </button>
    </div>
    </>
  );
}

