import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Tic Tac Toe</h1>
      <Link to="/game">Start Game</Link>
    </div>
  );
}
