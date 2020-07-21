/**
 * reverseInParentheses
 * @param {string} inputString
 * @return {string}
 */

function reverseInParentheses(inputString: string): string {
  if (inputString.includes('(')){
    return reverseInParentheses(reverseOnce(inputString));
  }
  return inputString;
}

function reverseOnce(s: string): string {
  const regexp = /\(([^()]*)\)/i;
  let subStr = regexp.exec(s)[1];
  subStr = subStr.split('').reverse().join('');
  return s.replace(regexp, subStr)
}
