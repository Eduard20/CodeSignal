/**
 * arrayChange
 * @param {Array} inputArray
 * @return {number}
 */
function arrayChange(inputArray: number[]): number {
  let moves: number = 0;

  for (let i: number = 0; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      moves += inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] = inputArray[i - 1] + 1;
    }
  }

  return moves;
}
