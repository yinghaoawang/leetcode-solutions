/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
  // simple solution using join
  // const w1 = word1.join('');
  // const w2 = word2.join('');

  // return w1 === w2;

  // 2 pointer solution
  let i1 = 0, j1 = 0, i2 = 0, j2 = 0;
  while (true) {
      const w1 = word1[i1]?.[j1];
      const w2 = word2[i2]?.[j2];

      if (w1 == null && w2 == null) break; // both words finished iterating
      if (w1 == null || w2 == null) return false; // str lengths not the same
      if (w1 != w2) return false;

      j1++;
      j2++;
      if (j1 >= word1[i1].length) {
          j1 = 0;
          i1++;
      }
      if (j2 >= word2[i2].length) {
          j2 = 0;
          i2++;
      }

  }


  return true;
};