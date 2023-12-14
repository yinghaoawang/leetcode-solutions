// input: int[] nums, int target
function twoSum(nums, target) {
  // return indices of 2 numbers that add up to target
  // input always has 1 solution, and cannot use the same element twice

  // nums=2,7,11,15 target=15
  // i, j, el=2 el2=7 sum=15

  // each iteration:
  // if el === el2, continue
  // if el + el2 === sum, return [i, j]
  // if j === nums.length - 1, i++, j = i + 1
  
  // loop conditions:
  // initial: i: start, j: i + 1
  // conditional: i < nums.length && j < nums.length
  for (let i = 0; i < nums.length; i++) { // 2,7,11,15
      const el = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
          const el2 = nums[j];
          if (el + el2 === target) return [i, j];
      }
  }
  return null;
}