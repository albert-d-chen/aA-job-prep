var removeKdigits = function(num, k) {
    if (num.length === k) return '0';
    
    let nums = [];
    let removed = 0;
    
    for (let n of num) {
        while (nums.length && n < nums[nums.length - 1] && removed < k) {
            nums.pop();
            removed++;
        }
        
        nums.push(n);
    }
    
    while (removed < k) {
        nums.pop();
        removed++;
    }
    
    while (nums.length && nums[0] === '0') {
        nums.shift();
    }
    
    if (nums.length) {
        return nums.join('');
    } else {
        return '0';
    }
    // return nums.join('');
    
    
};

console.log(removeKdigits('32345', 2))