import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1 style={{ color: "var(--color-turquoise)" }}>
          Welcome to Tic Tac Toe
        </h1>

        {!user ? (
          <div className="mt-3 d-flex flex-column gap-2">
            <a href="/login">
              <button className="btn btn-green w-100 w-auto mx-2">Login</button>
            </a>
            <a href="/registro">
              <button className="btn btn-orange w-100 w-auto mx-2">Registrer</button>
            </a>
          </div>
        ) : (
          <div className="mt-3 d-flex flex-column gap-2">
            <p style={{ color: "var(--color-green)" }}>
               Hello {user.email}, you are logged in!
            </p>
            <a href="/game">
              <button className="btn btn-green w-100 w-auto mx-2">Play game</button>
            </a>
            <a href="/leaderboard">
              <button className="btn btn-orange w-100 w-auto mx-2">Leaderboard</button>
            </a>
          </div>
        )}
      </div>
      
    </>
  );
}
