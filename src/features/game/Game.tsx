import Board from "../board/Board";
import { useGame } from "../../context/GameContext";
import { Link } from "react-router-dom";

export default function Game() {
  const { turn, winner } = useGame();
  return (
    <div>
      <h2>Turn: {turn}</h2>
      <Board />
      {winner && <Link to="/result">See Result</Link>}
    </div>
  );
}
