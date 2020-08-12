/**
 * arrayMaximalAdjacentDifference
 * @param {Array} inputArray
 * @return {Number}
 */
function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDifference: number = 0;

  for (let i: number = 0; i < inputArray.length; i++) {
    if (maxDifference < Math.abs(inputArray[i] - inputArray[i + 1])) {
      maxDifference = Math.abs(inputArray[i] - inputArray[i + 1]);
    }
  }

  return maxDifference;
}
