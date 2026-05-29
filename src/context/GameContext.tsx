import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const BOT_SYMBOL = "O";
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const playMove = (index, isBot = false) => {
  if (board[index] || winner) return;

  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);
  checkWinner(newBoard);

  if (!winner) {
    setTurn(turn === "X" ? "O" : "X");
  }

  // Si el jugador es X y no hay ganador → bot juega como O
  if (!isBot && turn === "X" && !winner) {
    const emptyCells = newBoard
      .map((c, i) => (c ? null : i))
      .filter((i) => i !== null);

    if (emptyCells.length > 0) {
      const botIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      // Bot coloca su jugada automáticamente
      setTimeout(() => playMove(botIndex, true), 500);
    }
  }
};


const checkWinner = (board) => {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of combos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      setWinner(board[a]);
      return;
    }
  }
  if (!board.includes(null)) setWinner("Draw");
};

  const resetGame = () => {
  setBoard(Array(9).fill(null));
  setTurn("X");
  setWinner(null);
};



useEffect(() => {
  if (turn === BOT_SYMBOL && !winner) {
    const emptyCells = board
      .map((c, i) => (c ? null : i))
      .filter((i) => i !== null);

    if (emptyCells.length > 0) {
      const botIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      setTimeout(() => playMove(botIndex, true), 500);
    }
  }
}, [turn, winner, board]);

  return (
    <GameContext.Provider value={{ board, turn, winner, playMove, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
