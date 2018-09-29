import { Dicer } from "./dicer";
import { createConstantRandomizer } from "../../utils/randomizer";

describe('Perudo/logic', () => {

  it('rollDice', () => {
    const dice = new Dicer(createConstantRandomizer(1)).rollDice(5);

    expect(dice.length).toBe(5);
    expect(dice.every(d => d === 1)).toBe(true);
  });

  it('meetsBid', () => {
    const pl = new Dicer(createConstantRandomizer(2));
    const makeBid = (dieCount, dots) => ({
      dieCount,
      dots,
    });

    expect(pl.meetsBid(makeBid(1, 1), [1, 2, 3])).toBe(true);
    expect(pl.meetsBid(makeBid(3, 1), [1, 2, 3])).toBe(false);
    expect(pl.meetsBid(makeBid(3, 6), [6, 1, 2, 6, 3, 6])).toBe(true);
    expect(pl.meetsBid(makeBid(3, 6), [6, 6, 1, 2, 6, 3, 6])).toBe(true);
  });

  it('calculateDotsSum', () => {
    const pl = new Dicer(createConstantRandomizer(2))

    expect(pl.calculateDotsSum([1,1,1])).toBe(3);
    expect(pl.calculateDotsSum([])).toBe(0);
    expect(pl.calculateDotsSum([1,2,6])).toBe(9);
  });

});