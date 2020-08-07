function isMAC48Address(inputString) {
  inputString = inputString.split('-');
  let trueCount = 0;
  if (inputString.length !== 6) {
    return false;
  }
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i].length !== 2) {
      return false;
    }
    if (inputString[i].charCodeAt(0) >= 48 && inputString[i].charCodeAt(0) <= 57 || inputString[i].charCodeAt(0) >= 65 && inputString[i].charCodeAt(0) <= 70 && (inputString[i].charCodeAt(1) >= 48 && inputString[i].charCodeAt(1) <= 57 || inputString[i].charCodeAt(1) >= 65 && inputString[i].charCodeAt(1) <= 70)) {
      trueCount++;
    } else {
      return false;
    }
  }
  return true;
}
