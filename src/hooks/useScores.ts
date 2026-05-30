import { db } from "../firebase/config";
import { addDoc, collection, getDocs, query, orderBy } from "firebase/firestore";

export const useScores = () => {
  const saveScore = async (uid: string, winner: string, email: string) => {
    await addDoc(collection(db, "scores"), {
      uid,
      email, // 👈 nuevo campo
      winner,
      date: new Date().toISOString(),
    });
  };

  const getScores = async () => {
    const q = query(collection(db, "scores"), orderBy("date", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  return { saveScore, getScores };
};
