class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # l = 0
        # r = 1
        # for r in range(r, len(nums)):
        #     if nums[l] != 0 and l < r:
        #         l += 1
        #     if (nums[r] != 0):
        #         temp = nums[l]
        #         nums[l] = nums[r]
        #         nums[r] = temp
        #         l += 1

        l = 0
        for r in range(len(nums)):
            if nums[r] != 0:
                temp = nums[l]
                nums[l] = nums[r]
                nums[r] = temp
                l += 1 # given nums[0] != 1, l will automatically increment since nums[r] != 1 and nums[l] = nums[r] = nums[0]

        