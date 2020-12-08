var letterCombinations = function(digits) {
    
    let hash = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let arr = [];
    if (digits.length === 0 ) return arr;
    if (digits.length === 1) {
        for (let i = 0; i < hash[digits].length; i++) {
            arr.push(hash[digits][i])
        }
        return arr;
    }
    for (let i = 0; i < digits.length; i++) {
        arr.push(hash[digits[i]]);
    }
    
    let ans = [];
    let max = 0;
    let check = 0;
    if (digits.includes(7) || digits.includes(9)) {
        max = 4;
    } else {
        max = 3;
    }
    console.log(max);
    if (digits.length > 1) {
        for (let i = 0; i < arr.length; i++) {
        let combo = arr[i];
        count = 0;
        index = 0;
        if (i === 0) {
            while (index < max) {
                ans.push(combo[index]);
                count++;
                // index++;
                if (digits.length === 2) {
                    check = max;
                } else {
                    check = max * digits.length;
                }
                if (count === check) {
                    index++;
                    count = 0;
                    // console.log(index);
                }
            }
        } else if (i === arr.length - 1){
               for (let k = 0; k < ans.length; k++) {
                    let letter = combo[k % max];
                    ans[k] += letter;
                }  
        } else {
            let track = 0;
            let another = 0;
            while (track < ans.length) {
                ans[track] += combo[index];
                count++;
                track++;
                another++;
                
                if (count === max) {
                    index++;
                    count = 0;
                    // console.log(index);
                }
                if (another === max * digits.length) {
                    index = 0;
                    another = 0;
                }

            } 
        }
        
    }
    } 
    
    return ans;
};

let digits = '999'
console.log(letterCombinations(digits))