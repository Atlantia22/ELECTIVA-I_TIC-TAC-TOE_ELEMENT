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
      <nav className="navbar navbar-custom px-3">
    <div className="d-flex gap-2">
      <button onClick={() => navigate(-1)} className="btn btn-yellow">←</button>
      <Link to="/" className="btn btn-turquoise">Home</Link>
      <Link to="/game" className="btn btn-green">Game</Link>
      <Link to="/leaderboard" className="btn btn-orange">Leaderboard</Link>
    </div>

    {user && (
      <button onClick={handleLogout} className="btn btn-red">
        Log out
      </button>
    )}
  </nav>
  );
}
