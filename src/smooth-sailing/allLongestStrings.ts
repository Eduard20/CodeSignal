/**
 * allLongestStrings
 * @param inputArray
 */

export function allLongestStrings(inputArray: string[]): string[] {
  const result: string[] = [""];
  let count: number = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const iLength: number = inputArray[i].length;
    const lastElLength: number = result[result.length - 1].length;

    if (iLength >= lastElLength) {
      count = iLength > lastElLength ? 1 : ++count;
      result.push(inputArray[i]);
    }
  }

  return result.slice(result.length - count);
}
