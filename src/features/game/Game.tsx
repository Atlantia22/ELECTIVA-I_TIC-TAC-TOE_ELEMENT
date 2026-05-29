import Board from "../board/Board";
import { useGame } from "../../context/GameContext";
import Result from "./Result";

export default function Game() {
  const { turn, winner } = useGame();

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
