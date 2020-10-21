/**
 * @function alphabeticShift
 * @param {String} inputString
 * @return {String}
 */

function alphabeticShift(inputString: string): string {
  let outputString: string = '';

  for (let i: number = 0; i < inputString.length; ++i) {
    const code: number = inputString.charCodeAt(i) % 122;

    outputString += (code == 0 ? 'a' : String.fromCharCode(code + 1));
  }

  return outputString;
}
