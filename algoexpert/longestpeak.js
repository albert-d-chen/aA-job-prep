function longestPeak(array) {
  // Write your code here.
	let longest = 0;
	let i = 0;
	
	while (i < array.length - 1) {
		let isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
		if (!isPeak) {
			i++; 
			continue;
		}
		
		let left = i - 2;
		while (left >= 0 && array[left] < array[left + 1]) {
			left--;
		}
		let right = i + 2;
		while (right < array.length && array[right] < array[right - 1]) {
			right++;
        }
        console.log(right)
        console.log(left)
		let current = right - left - 1;
		longest = Math.max(current, longest);
		i = right;
	}
	
    return longest
}

arr = [1, 0, 1, 2, 1, 0, 1]

console.log(longestPeak(arr))