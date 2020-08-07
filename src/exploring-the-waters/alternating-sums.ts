/**
 * alternatingSums
 * @param {Array} a
 * @return {Array}
 */

export function alternatingSums(a: number[]): number[] {
  const sum: number[] = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      sum[0] += a[i];
    } else {
      sum[1] += a[i];
    }
  }

  return sum;
}
