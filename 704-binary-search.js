// input array of ints sorted ascending, integer
// if target exists in integer, return index, otherwise return -1
function search(array, target) {
  // binary search
  // since it is sorted, we can use binary search
  // -1 0 3 5 9 12 target=9
  // l: -1, r: 12, m: 3
  // if mVal < target, l = m + 1
  // else r = m - 1
  return binarySearch(array, target);

  // brute force
  // iterate through array from 0 to length - 1, and return the index if matches
  return bruteForce(array, target);
}

function binarySearch(array, target) {
  // initialize variables
  let l = 0, r = array.length - 1;
  // iterate through array
  while (l <= r) { // Time: O(log n)
      // calculate m
      const m = Math.floor((l + r) / 2);
      if (array[m] === target) return m;
      // 1 2 3 t=1
      else if (array[m] < target)
          l = m + 1;
      else r = m - 1;
  }
  return -1;
}

function bruteForce(array, target) {
  for (let i = 0; i < array.length; i++) { // Time: O(n)
      if (array[i] === target) return i;
  }
  return -1;
}