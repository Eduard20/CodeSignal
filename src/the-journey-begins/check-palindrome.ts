/**
 * checkPalindrome
 * @param inputString
 * @return {boolean}
 */

export function checkPalindrome(inputString: string): boolean {
  const len: number = inputString.length;
  const mid: number = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (inputString[i] !== inputString[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
