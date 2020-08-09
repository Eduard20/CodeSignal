/**
 * isLucky
 * @param {number} n
 * @return {boolean}
 */

export function isLucky(n: number): boolean {
  const nArray: string[] = n.toString().split('');
  let firstHalf: number = 0;
  let secondHalf: number = 0;

  for (let i = 0; i < nArray.length; i++) {
    if (i < nArray.length / 2) {
      firstHalf = firstHalf + parseInt(nArray[i]);
    } else {
      secondHalf = secondHalf + parseInt(nArray[i]);
    }
  }

  return firstHalf === secondHalf;
}
