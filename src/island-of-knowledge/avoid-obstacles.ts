/**
 * avoidObstacles
 * @param {Array} inputArray
 * @return {Number}
 */

export function avoidObstacles(inputArray: number[]): number {
  let jump: number = 1;
  let cond: boolean = true;

  while (true) {
    cond = true;
    for (let i: number = 0; i < inputArray.length; i++) {
      if (inputArray[i] % jump === 0) {
        cond = false;
      }
    }
    if (cond) {
      return jump
    }
    jump++
  }
}
