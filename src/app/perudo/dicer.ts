import { Game, DieDots, Bid } from './model';
import { Randomizer } from '../../utils/randomizer';

export class Dicer {
  constructor(private randomizer: Randomizer) {}

  rollDice(diceCount: number): DieDots[] {
    const res: DieDots[] = [];
    for (let i=0; i < diceCount; i++) {
      res.push(this.randomizer.intFromTo(1, 6) as DieDots);
    }
    return res;
  }

  meetsBid(bid: Bid, dice: DieDots[]): boolean {
    const bidDice = dice.filter(die => die === bid.dots);
    return bidDice.length >= bid.dieCount;
  }

  calculateDotsSum(dice: DieDots[]): number {
    return dice.reduce((sum, die) => sum + die, 0);
  }
}
