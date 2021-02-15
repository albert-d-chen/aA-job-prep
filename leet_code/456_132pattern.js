function pattern(nums) {
    let stack = []
    let s3 = -Infinity
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < s3) return true;
        while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            s3 = stack.pop()
            console.log(s3);
        }
        stack.push(nums[i])
    }
    return false;
}

let nums = [3,1,4,2]
let nums1 = [-1,3,2,0];
console.log(pattern(nums1));