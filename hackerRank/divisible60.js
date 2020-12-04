var numPairsDivisibleBy60 = function(time) {
    
   let map={};
    
   let pairs = 0;
    
    for(index in time) {
	    // get remainder after dividing by 60
        let num = time[index]%60;
        // compliment is 60 minus our number (or 0 if evenly divisible)
        let compliment = (num ? 60-num : 0);
        if(map[compliment]) {
            pairs += map[compliment];
        }
        // if not in map, add it, if it is, add one
		// you want to increment so that when you find its compliment, 
		// you know how many matches it has in the set
        map[num] = (map[num]) ? map[num]+1 : 1;
    }
    
    return pairs;
    
};