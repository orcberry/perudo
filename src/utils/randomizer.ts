
export interface Randomizer {
  // Returns a random number between min (inclusive) and max (exclusive)
  intFromTo(min: number, max: number): number;
}

// always return constant value
export function createConstantRandomizer(value): Randomizer {
  return {
    intFromTo(min, max) {
      return value;
    }
  }
}

// Browser.Math based
export class BMRandomizer implements Randomizer {
  intFromTo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
