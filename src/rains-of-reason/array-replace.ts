
function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  for (let index: number = 0; index < inputArray.length; index++) {
    if (inputArray[index] === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  }

  return inputArray;
}
