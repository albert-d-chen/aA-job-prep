// Given a sorted array nums, remove the duplicates in -place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.


var removeDuplicates = function (nums) {
    let i = 0
    while (i < nums.length - 1) {
        let j = i + 1;
        if (nums[i] === nums[j]) {
            nums.splice(j, 1)
        } else {
            i++
        }
    }
    return nums.length
};