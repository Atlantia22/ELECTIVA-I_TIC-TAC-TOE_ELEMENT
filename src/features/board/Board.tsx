import { useGame } from "../../context/GameContext";

export default function Board() {
  const { board, playMove } = useGame();

  return (
    <div className="d-grid gap-2" style={{ gridTemplateColumns: "repeat(3, 1fr)", width: "200px" }}>
      {board.map((cell, i) => (
        <button
          key={i}
          className="btn btn-outline-dark"
          style={{ height: "60px", fontSize: "24px" }}
          onClick={() => playMove(i)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
}
