/**
 * matrixElementsSum
 * @param matrix
 * @return {number}
 */

export function matrixElementsSum(matrix: number[][]): number {
  let price: number = 0;

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (y === 0)
        price += matrix[y][x];
      else {
        if (matrix[y - 1][x] === 0)
          matrix[y][x] = 0;
        price += matrix[y][x];
      }
    }
  }

  return price;
}
