'use strict';

/**
 * commonCharacterCount
 * @param {string} s1
 * @param {string} s2
 * @return {number} count
 */

function commonCharacterCount(s1: string, s2: string): number {
  let count: number = 0;
  const s1Array: string[] = s1.split('');
  const s2Array: string[] = s2.split('');

  for (let i = 0; i < s1Array.length; i++){
    for (let j = 0; j < s2Array.length; j++){
      if(s1Array[i] && s2Array[j] && s1Array[i] === s2[j]){
        s1Array[i] = '';
        s2Array[j] = '';
        count++;
      }
    }
  }

  return count;
}
