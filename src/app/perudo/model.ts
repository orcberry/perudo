
export interface Player {
  id: string;
  name: string;
}

export type DieDots = 1 | 2 | 3 | 4 | 5 | 6;

export interface Bid {
  dots: DieDots;
  dieCount: number;
}

export interface Game {
  players: Player[];
  playerIndex: number;
  looserHistory: Player[];
  roundBids: Bid[];
}
