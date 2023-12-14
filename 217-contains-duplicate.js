// input: int[] nums
// return true if every value is distinct, else false
function containsDuplicate(nums) {
  // brute force
  // 1,2,3,3
  // el=3 el2=3
  // time=O(n^2)
  // space=O(1)

  // sort
  // 1, 2, 3, 3
  // el=3 next=3
  // time=O(nlogn)
  // space=(1)

  // hash
  // 1,2,3,1
  // hm={1: 2, 2: 1, 3: 1}
  // el=1
  // time=O(n)
  // space=O(n)

  // sort method

  return sortMethod(nums);
  // return hashMapMethod(nums);
}

function hashMapMethod(nums) { // 1,2,3,1
  // initialize hm
  const hm = {};
  // iterate through array to fill the hm and check for repeats
  for (const el of nums) {
      if (hm[el] == null) {
          hm[el] = 1;
      } else {
          // if the element already exists, then there must be a repeat
          return true;
      }
  }
  // if we haven't returned true, then there must be no repeats
  return false; 
}

function sortMethod(nums) {
  // sort the array
  const sorted = nums.sort();
  // iterate through nums to check if there is any adjacent repeats
  for (let i = 0; i < nums.length - 1; i++) {
      const el = nums[i];
      const next = nums[i + 1];
      if (el === next) return true;
  }
  // if hasn't returned true, then there are no adjacent repeats
  return false;
}