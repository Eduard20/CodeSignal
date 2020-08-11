/**
 * areEquallyStrong
 * @param {Number} yourLeft
 * @param {Number} yourRight
 * @param {Number} friendsLeft
 * @param {Number} friendsRight
 * @return {Boolean}
 */

function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  return yourLeft + yourRight === friendsLeft + friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
}
