import { useEffect, useState } from "react";
import { useScores } from "../../hooks/useScores";

export default function Leaderboard() {
  const { getLeaderboard } = useScores();
  const [scores, setScores] = useState<any[]>([]);

  useEffect(() => {
    getLeaderboard().then(setScores);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Leaderboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th>UID</th>
            <th>Winner</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(s => (
            <tr key={s.id}>
              <td>{s.uid}</td>
              <td>{s.winner}</td>
              <td>{s.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
