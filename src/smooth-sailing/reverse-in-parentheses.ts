/**
 * reverseInParentheses
 * @param {string} inputString
 * @return {string}
 */

export function reverseInParentheses(inputString: string): string {
  if (inputString.includes('(')){
    return reverseInParentheses(reverseOnce(inputString));
  }
  return inputString;
}

function reverseOnce(s: string): string {
  const regexp: any = /\(([^()]*)\)/i;
  let subStr: string = regexp.exec(s)[1];
  subStr = subStr.split('').reverse().join('');
  return s.replace(regexp, subStr)
}
