// input: string s
// return true if s is a palindrome, otherwise false
// palindrome is case insensitive, only includes alphanum characters, and reads the same forward and backward
function isPalindrome(str) {
  // rac! e CAr.
  // remove non alpha num, and change to lowercase
  // racecar
  // i: 4, j: 2
  // l: e, r: e
  // use two pointers. l points to left of string, and r points to right of string
  // make sure l and r are the same character, otherwise it is not a palindrome
  // each iteration increment l by 1, and decrement r by 1 every iteration
  // if l every passes r (l > r) then we should stop iterating
  // if the loop doesnt return false, then the string must be a palindrome
  // time: O(n), space: O(1)
  return twoPointers(str);

  // rac! e CAr.
  // remove non alpha num, and change to lowercase
  // racecar
  // reverse it
  // original: racecar, reversed: racecar
  // if they are equal, return true, otherwise false
  // time: O(n), space: O(n)
  return reverse(str);
}

// checks if a lowercase char is alphanumerical
function isAlphanum(c) {
  // in the ascii table the numbers are sequential from 0 to 9
  // the lowercase letters are also sequential from a to z
  // comparing the character will automatically compare their char codes
  if (c >= '0' && c <= '9') return true;
  if (c >= 'a' && c <= 'z') return true;
  // if we have not returned true, then the char must be not 0-9 and not a-z, so it is not alphanumerical
  return false;
}

function reverse(str) {
  const alnumArr = str.toLowerCase().split('').filter(c => isAlphanum(c));
  const alnumStr = alnumArr.join('');
  const reversed = alnumArr.reverse().join('');
  return alnumStr === reversed;
}

function twoPointers(str) {
  const alnumStr = str.toLowerCase().split('').filter(c => isAlphanum(c)).join('');
  let l = 0;
  let r = alnumStr.length - 1;
  while (l < r) {
      const lChar = alnumStr[l];
      const rChar = alnumStr[r];
      if (lChar != rChar) return false;
      l++;
      r--;
  }
  return true;
}