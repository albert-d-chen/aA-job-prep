var moveZeroes = function(nums) {
        let count = 0;
        for (let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                nums[count++] = nums[i];
            }
            console.log(nums)
        }

        // for (let i = count; i < nums.length; i++){
        //     nums[i] = 0;
        // }
        return nums;    
    };

console.log(moveZeroes([1,1,3,0,12]))