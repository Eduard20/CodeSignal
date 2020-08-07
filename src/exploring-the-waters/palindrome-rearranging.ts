/**
 * palindromeRearranging
 * @param {String} inputString
 * @return {Boolean}
 */

function palindromeRearranging(inputString: string): boolean {
  let strObj: any = {};
  if (inputString.length === 1) {
    return true;
  }
  const inputToArr: string[] = inputString.split('');

  for (let i: number = 0; i < inputToArr.length; i++) {
    if (!strObj.hasOwnProperty(inputToArr[i])) {
      strObj[inputToArr[i]] = 1;
      continue;
    }
    strObj[inputToArr[i]]++
  }
  let oddCount: number = 0;
  for (let prop in strObj) {

    if (strObj[prop] % 2 === 1) {
      oddCount++
    }
  }

  return oddCount < 2;
}
