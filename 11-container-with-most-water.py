class Solution:
    def maxArea(self, height: List[int]) -> int:
        sP = 0
        eP = len(height) - 1
        maxArea = 0
        while (sP < eP):
            width = eP - sP
            currArea = min(height[sP], height[eP]) * width 
            if currArea > maxArea:
                maxArea = currArea
            if (height[sP] > height[eP]):
                eP -= 1
            else:
                sP += 1
        return maxArea
