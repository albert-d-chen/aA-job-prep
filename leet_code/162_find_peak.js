var findPeakElement = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.length <= 2) {
            if (nums[i] > nums[i + 1]) {
                return i;
            } else if (nums[i + 1] > nums[i]) {
                return i + 1;
            }
        }
        
        // if (i === 0 && nums[i] > nums[i + 1]) {
        //     return i;
        // }
        
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
        
        if (i === nums.length - 1 && nums[i] > nums[i - 1]) {
            return i;
        }
    }
    return 0;
};