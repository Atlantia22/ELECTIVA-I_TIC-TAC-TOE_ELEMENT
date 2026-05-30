import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Bienvenida al Tic Tac Toe 🎮</h1>
      <p>Selecciona una opción para continuar:</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/login" className="btn btn-dark">Iniciar sesión</Link>
        <Link to="/register" className="btn btn-outline-dark">Registrarse</Link>
        <Link to="/game" className="btn btn-success">Jugar</Link>
        <Link to="/leaderboard" className="btn btn-info">Leaderboard</Link>
      </div>
    </div>
  );
}