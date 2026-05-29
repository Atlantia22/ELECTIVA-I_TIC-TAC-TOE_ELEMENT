import { useGame } from "../../context/GameContext";

export default function Board() {
  const { board, playMove } = useGame();

  return (
    <div className="grid grid-cols-3 gap-2 w-48">
      {board.map((cell, i) => (
        <button
          key={i}
          className="h-16 w-16 border text-2xl"
          onClick={() => playMove(i)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
}
