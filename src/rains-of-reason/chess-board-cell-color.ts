/**
 * @function chessBoardCellColor
 * @param {String} cell1
 * @param {String} cell2
 * @return {Boolean}
 */

function chessBoardCellColor(cell1: string, cell2: string): boolean {
  return Math.abs((cell1.charCodeAt(0) - cell2.charCodeAt(0))) % 2
    === Math.abs((cell1.charCodeAt(1) - cell2.charCodeAt(1))) % 2;
}
