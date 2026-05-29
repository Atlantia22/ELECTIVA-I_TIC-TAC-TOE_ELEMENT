import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to Tic Tac Toe</h1>
      <Link to="/game">
        <Button variant="success">Start Game</Button>
      </Link>
    </div>
  );
}
