function duplicate(nums) {
  const head = nums[0];
  let slow = nums[head];
  let fast = nums[nums[head]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    console.log('slow', slow, 'fast', fast)

  }
  fast = head;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow || -1;
}

let arr1 = [1,2,3,4,2,5,6];
console.log(duplicate(arr1))