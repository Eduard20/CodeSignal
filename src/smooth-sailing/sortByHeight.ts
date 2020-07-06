/**
 * sortByHeight
 * @param {Array} a
 * @return {Array}
 */

function sortByHeight(a: number[]): number[] {
  const arr: number[] = [];
  const newArr = [];

  for (let i: number = 0; i < a.length; i++) {
    if (a[i] === -1) {
      arr.push(i);
    } else {
      newArr.push(a[i]);
    }
  }

  const sorted: number[] = newArr.sort((prev, current) => prev - current);
  for (let j: number = 0; j < arr.length; j++) {
    sorted.splice(arr[j], 0, -1);
  }

  return sorted;
}
