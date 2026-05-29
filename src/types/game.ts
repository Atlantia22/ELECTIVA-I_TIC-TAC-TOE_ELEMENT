export interface GameState {
  board: (string | null)[];
  turn: "X" | "O";
  winner: string | null;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
}