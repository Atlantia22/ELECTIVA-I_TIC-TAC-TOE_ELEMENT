import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    // Mientras Firebase confirma la sesión, no mostramos nada
    return <div className="text-center mt-5">Cargando sesión...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1>Bienvenido al Tic Tac Toe</h1>
        

        {/* 👇 Mostrar login/registro solo si NO hay usuario */}
        {!user ? (
          <div className="mt-3">
            <a href="/login">
              <button className="btn btn-primary">Iniciar sesión</button>
            </a>
            <a href="/registro">
              <button className="btn btn-secondary">Registrarse</button>
            </a>
          </div>
        ) : (
          <div className="mt-3">
            <p>Hola {user.email}, ¡ya estás conectado!</p>
            <a href="/game">
              <button className="btn btn-success">Ir al Juego</button>
            </a>
            <a href="/leaderboard">
              <button className="btn btn-info">Ver Leaderboard</button>
            </a>
          </div>
        )}
      </div>
      
    </>
  );
}
