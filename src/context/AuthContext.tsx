import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import type { User as FirebaseUser } from "firebase/auth";
import type { User } from "../types/user";


interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        setUser({ uid: firebaseUser.uid, email: firebaseUser.email! });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
