import { useState } from "react";
import { useAuthActions } from "../../hooks/useAuthActions";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navBar";

export default function Login() {
  const { login } = useAuthActions();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate("/game");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn btn-green w-100" disabled={loading}>
        {loading ? "Cargando..." : "Entrar"}
      </button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </form>
    </div>
    </>
  );
}
