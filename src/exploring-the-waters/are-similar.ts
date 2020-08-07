/**
 * areSimilar
 * @param {Array} a
 * @param {Array} b
 * @return Boolean
 */

function areSimilar(a: number[], b: number[]): boolean {
  if (a.length !== b.length) {
    return false;
  }
  const tempArr: number[] = [];

  for (let i: number = 0; i < b.length; i++) {
    if (a[i] !== b[i]) {
      tempArr.push(i);
    }
  }

  if (tempArr.length === 0) {
    return true;
  } else if (tempArr.length !== 2) {
    return false;
  }

  return a[tempArr[0]] === b[tempArr[1]] && a[tempArr[1]] === b[tempArr[0]]
}
