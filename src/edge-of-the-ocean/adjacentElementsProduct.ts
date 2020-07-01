/**
 * adjacentElementsProduct
 * @param inputArray
 * @return {number}
 */

export function adjacentElementsProduct(inputArray: number[]): number {
  let largest: number = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i - 1] > largest) {
      largest = inputArray[i] * inputArray[i - 1];
    }
  }

  return largest;
}
