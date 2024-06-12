/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  // pretty easy to do with a map, but I must do it with constant space

  // // marking approaching
  // for (let i = 0; i < nums.length; i++) {
  //     let num = nums[i];
  //     // check if is dupe
  //     // if num is -1, checks if index 0 is negative 
  //     if (nums[Math.abs(num) - 1] < 0) return Math.abs(num);
  //     // mark if not a dupe
  //     nums[Math.abs(num) - 1] *= -1;
  // }
  // return -1;

  // oops, i'm not allowed to modify the array

  // this only works because each integer is in range of 1, len-1
  // if i start at 0, it will never point to 0 because 1 to len-1

  // 1 -> 3 -> 2 -> 4 -> 2 -> 2 -> 4 -> 2
  // 1 -> 2 -> 2

  // 3 -> 4 -> 2 -> 3 -> 4 -> 2 -> 3 -> 4 -> 2 -> 3 -> 4 -> 2
  // 3 -> 2 -> 4 -> 3 -> 2 -> 4 -> 3

  // this only tells us if there's a cycle or not

  // for some unintuitive reason, we can find the repeated digit if we created a new slow pointer at 0 when the slow and fast pointer meet
      // then we move both slow pointers until they meet (idk..)

  let f = 0, s = 0;
  while (true) {
      s = nums[s];
      f = nums[f];
      f = nums[f];
      if (nums[f] === nums[s]) break;
  }

  let newS = 0;
  while (true) {
      if (nums[s] === nums[newS]) return nums[s];
      s = nums[s];
      newS = nums[newS];
  }

};
