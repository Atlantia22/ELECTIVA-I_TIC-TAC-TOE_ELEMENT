import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

interface PlayerStats {
  email: string;
  wins: number;
}

export default function LeaderBoard() {
  const [players, setPlayers] = useState<PlayerStats[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      const snapshot = await getDocs(collection(db, "scores"));
      const counts: Record<string, number> = {};

      snapshot.forEach((doc) => {
        const data = doc.data();
        const email = data.email;
        const winner = data.winner;

        if (winner === email) {
          counts[email] = (counts[email] || 0) + 1;
        }
      });

      const stats = Object.entries(counts)
        .map(([email, wins]) => ({ email, wins }))
        .sort((a, b) => b.wins - a.wins);

      setPlayers(stats);
    };

    fetchScores();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🏆 Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Victorias</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.email}>
              <td>{p.email}</td>
              <td>{p.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
