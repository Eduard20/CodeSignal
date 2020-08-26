/**
 * minesweeper
 * @param {Array} matrix
 * @return {Array}
 */

function minesweeper(matrix: boolean[][]): number[][] {
  const rows: number = matrix.length;
  const cols: number = matrix[0].length;
  const newMatrix: number[][] = [];

  for (let row: number = 0; row < rows; ++row) {
    let rowVals: number[] = [];
    for (let col: number = 0; col < cols; ++col) {
      let count: number = 0;
      for (let i: number = (row === 0 ? 0 : -1); row + i < rows && i < 2; ++i) {
        for (let j: number = (col === 0 ? 0 : -1); col + j < cols && j < 2; ++j) {
          if (matrix[row + i][col + j]) ++count;
        }
      }
      if (matrix[row][col]) --count;
      rowVals.push(count);
    }
    newMatrix.push(rowVals);
  }

  return newMatrix;
}
