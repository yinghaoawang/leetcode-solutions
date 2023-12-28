/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // inelegant hardcoded but practical hardcoded solution

  // 1994
  // i can subtract roman numeral values if it meets the threshold
  // i.e greater than 1000
  // 1994 -> 994, M
  // 994 -> 94, CM
  // 94 -> 4, XC
  // 4 -> 0, IV

  let res = '';
  while (num > 0) {
      if (num >= 1000) {
          num -= 1000;
          res += 'M';
      } else if (num >= 900) {
          num -= 900;
          res += 'CM';
      } else if (num >= 500) {
          num -= 500;
          res += 'D';
      } else if (num >= 400) {
          num -= 400;
          res += 'CD';
      } else if (num >= 100) {
          num -= 100;
          res += 'C';
      } else if (num >= 90) {
          num -= 90;
          res += 'XC';
      } else if (num >= 50) {
          num -= 50;
          res += 'L';
      } else if (num >= 40) {
          num -= 40;
          res += 'XL';
      } else if (num >= 10) {
          num -= 10;
          res += 'X';
      } else if (num >= 9) {
          num -= 9;
          res += 'IX';
      } else if (num >= 5) {
          num -= 5;
          res += 'V';
      } else if (num >= 4) {
          num -= 4;
          res += 'IV';
      } else if (num >= 1) {
          num -= 1;
          res += 'I'
      }
  }

  return res;
};