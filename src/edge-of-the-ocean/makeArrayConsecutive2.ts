'use strict';

/**
 * makeArrayConsecutive2
 * @param statues
 * @return {number}
 */

export function makeArrayConsecutive2(statues: number[]): number {
  const sorted = statues.sort((a: number, b: number) => a - b);
  let current: number = sorted[0];
  let needed: number = 0;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== current + 1) {
      needed = needed + (sorted[i] - current - 1);
    }
    current = sorted[i];
  }

  return needed;
}
