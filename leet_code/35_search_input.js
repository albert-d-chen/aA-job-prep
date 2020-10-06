// Given a sorted array of distinct integers and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.

var searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (target > nums[i] && target <= nums[i + 1] && i !== nums.length - 1) {
               return i + 1;
            } else if (target < nums[0]) {
                return 0;
            } else if (target > nums[-1]) {
                return nums.length - 1;
            }
        }
    }
};

console.log(searchInsert([1,3,5,6], 2))