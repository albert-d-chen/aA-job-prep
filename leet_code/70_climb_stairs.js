var climbStairs = function(n) {
    let temp = 0;
    let curr = 1;
    let prev = 0;
    
    for (let i = 0; i < n; i++) {
        temp = prev;
        prev = curr;
        curr += temp;
    }
    
    return curr;
};