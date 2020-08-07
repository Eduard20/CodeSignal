/**
 * addBorder
 * @param {Array} picture
 * @return {Array}
 */

export function addBorder(picture: string[]): string[] {
  const n: number = picture[0].length + 2;
  const newPicturesList: string[] = [];
  const border = (() => {
    let s: string = '';
    for (let i: number = 0; i < n; ++i) {
      s += '*';
    }
    return s;
  })();

  newPicturesList.push(border);

  for (let i: number = 0; i < picture.length; ++i) {
    newPicturesList.push('*' + picture[i] + '*');
  }

  newPicturesList.push(border);

  return newPicturesList;
}
