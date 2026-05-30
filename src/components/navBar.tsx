import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="d-flex gap-2">
        <button onClick={() => navigate(-1)} className="btn btn-secondary">←</button>
        <button onClick={() => navigate(1)} className="btn btn-secondary">→</button>
        <Link to="/" className="btn btn-light">Home</Link>
        <Link to="/game" className="btn btn-success">Juego</Link>
        <Link to="/leaderboard" className="btn btn-info">Leaderboard</Link>
      </div>

      {user && (
        <button onClick={handleLogout} className="btn btn-danger">
          Cerrar sesión
        </button>
      )}
    </nav>
  );
}
