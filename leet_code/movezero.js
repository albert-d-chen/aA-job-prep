function moveZeroes(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[counter] = nums[i];
            counter++;
        }
    }

    for (let i = counter; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;    
};

// var moveZeroes = function(nums) {
//   nums.sort((a,b) => {return a-b});
//    for(let index = nums.length - 1; index >= 0 ; index--){
//     if(nums[index] === 0){
//       nums.splice(index, 1);
//       nums.push(0);
//     }
//    }
//    return nums;
// };

console.log(moveZeroes([1,3,2,0,12 ,13]))