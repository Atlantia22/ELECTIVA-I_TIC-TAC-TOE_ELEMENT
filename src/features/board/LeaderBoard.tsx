import { useEffect, useState } from "react";
import { useScores } from "../../hooks/useScores";
import Navbar from "../../components/navBar";

export default function LeaderBoard() {
  const { getScores } = useScores(); 
  const [scores, setScores] = useState<any[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      const data = await getScores();
      setScores(data);
    };
    fetchScores();
  }, [getScores]);

  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <h2>Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Email</th>
            <th>Winner</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(score => (
            <tr key={score.id}>
              <td>{score.email}</td>
              <td>{score.winner}</td>
              <td>{new Date(score.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
