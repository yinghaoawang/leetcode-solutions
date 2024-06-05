/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  // disclaimer: bottom 5% of all performance and memory :()

  // s1: a=1, b=1

  // eidbaooo
  // e not in s1: r++, l=r
  // i not in s1: r++, l=r
  // d not in s1: r++, l=4
  // b in s1 GOOD: increment b in map2, map2[b] <= map1[b] GOOD, r-l < s1.length: r++
  // a in s1 GOOD: increment a in map2, map2[a] <= map1[a] GOOD: r-l == s1.length: return true

  // s1 is the smaller one EDIT: WRONG

  // if (s1.length > s2.length) {
  //     let tmp = s2;
  //     s2 = s1;
  //     s1 = tmp;
  // }
  // ABOVE IS WRONG

  // let s1Map = {}, s2Map = {};
  // for (let char of s1) {
  //     s1Map[char] = s1Map[char] + 1 || 1;
  // }
  // // for (let char of s2) {
  // //     s2Map[char] = s2Map[char] + 1 || 1;
  // // }

  // let l = 0, r = 0;
  // while (r < s2.length) {
  //     let char = s2[r];
  //     s2Map[char] = s2Map[char] + 1 || 1;
  //     let len = r-l+1;
  //     // console.log(l, r, len);


  //     if (s1Map[char] == null || s1Map[char] < s2Map[char] || len > s1.length) {
  //         s2Map = {};
  //         l++;
  //         r=l;
  //         continue;
  //     }

  //     if (len == s1.length) return true;
  //     r++;
  // }

  // return false;

  // i want to try to get it by the size of s1 since i know that s1 is the key and s2 is the haystack
  // if (s1.length > s2.length) return false;
  // let l = 0, r = s1.length - 1, s1Map = {}, s2Map = {};
  // for (const c of s1) s1Map[c] = s1Map[c] + 1 || 1;
  // for (let i = 0; i < s1.length; i++) {
  //     const c = s2[i];
  //     s2Map[c] = s2Map[c] + 1 || 1;
  // }
  // while (r < s2.length) {
  //     // console.log(l, r, s2Map);
  //     if (mapEqual(s1Map, s2Map)) return true;
  //     s2Map[s2[l]]--;
  //     if (s2Map[s2[l]] === 0) delete s2Map[s2[l]];
  //     l++, r++;
  //     if (s2[r] >= s2.length) break;
  //     s2Map[s2[r]] = s2Map[s2[r]] + 1 || 1;
  // }


  // function mapEqual(map1, map2) {
  //     for (const key in map1) {
  //         if (map2[key] != map1[key]) return false;
  //     }
  //     for (const key in map2) {
  //         if (map2[key] != map1[key]) return false;
  //     }
  //     return true;
  // }
  // return false;

  // improved improved version
  if (s1.length > s2.length) return false;
  let matches = 0;
  let l = 0, r = s1.length - 1, s1Map = {}, s2Map = {};
  for (const c of s1) s1Map[c] = s1Map[c] + 1 || 1;
  for (let i = 0; i < s1.length; i++) {
      const c = s2[i];
      s2Map[c] = s2Map[c] + 1 || 1;
  }

  for (let i = 0; i < 26; i++) {
      let c = String.fromCharCode('a'.charCodeAt(0) + i);
      s1Map[c] = s1Map[c] || 0;
      s2Map[c] = s2Map[c] || 0;
      matches += s1Map[c] === s2Map[c] ? 1 : 0;
  }

  while (r < s2.length) {
      // console.log(l, r, s2Map, matches);
      if (matches === 26) return true;

      r++;
      const rChar = s2[r];
      s2Map[rChar] = s2Map[rChar] + 1 || 1;

      if (s2Map[rChar] === s1Map[rChar]) matches++;
      else if (s2Map[rChar] === s1Map[rChar]+1) matches--;

      l++;
      const lChar = s2[l-1];
      s2Map[lChar]--;

      if (s2Map[lChar] === (s1Map[lChar] || 0)) matches++;
      else if (s2Map[lChar] === (s1Map[lChar] || 0)-1) matches--;

  }

  return matches === 26;
};