
export interface Player {
  id: string;
  name: string;
}

export type DieValue = 1 | 2 | 3 | 4 | 5 | 6;

export interface Bid {
  value: DieValue;
  count: number;
}

export interface Game {
  players: Player[];
  playerIndex: number;
  looserHistory: Player[];
  roundBids: Bid[];
}
