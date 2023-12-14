// input: string str1, string str2
// return true if anagram of s, else false
function isAnagram(str1, str2) {
  // str1=anagram str2=nagaram
  // sort method
  // str1=aaagmnr str2=aaagmnr
  // time:O(n) space:O(1)

  // hashmap method
  // str1=anagram str2=nagaram
  // hm1={a: 3, n: 1, g: 1, r: 1, m: 1}
  // hm2={a: 3, n: 1, g: 1, r: 1, m: 1}
  // compare all keys and values
  // time:O(n) space:O(n)

  // optimization
  // hm={a: 0, n: 0, g: 0, r: 0, m: 0}
  // make sure all hm are 0

  // return hashMapMethod(str1, str2);
  return sortMethod(str1, str2);
}

function sortMethod(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

function hashMapMethod(str1, str2) {
  // initialize hm
  const hm = {};
  // iterate through str1 to fill hm
  for (const el of str1) {
      const count = hm[el] || 0;
      hm[el] = count + 1;
  }
  // terate through str2 to remove specified counts from hm
  for (const el of str2) {
      const count = hm[el] || 0;
      hm[el] = count - 1;
  }
  // check hm to see if all the values are 0
  for (const [key, value] of Object.entries(hm)) {
      if (value != 0) return false;
  }
  // if we did not return false, then all values are 0/ they are anagrams
  return true;
}