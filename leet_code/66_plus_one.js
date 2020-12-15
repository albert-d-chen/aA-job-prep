var plusOne = function(digits) {
    let arr = [];
    let start = false;
    
    // let stringNum = digits.join('');
    // console.log(stringNum);
    // let num = parseInt(stringNum) + 1;
    // console.log(num);
    // return String(num).split('');
    for (let i = digits.length - 1; i >= 0; i--) {
        

        if (start === true && i !== digits.length - 1) {
            arr[i] = arr[i] + 1;
            if (arr[digits.length - i] === 10) {
                arr[digits.length - i] = 0;
                arr.unshift(0);
            } else {
                arr.unshift(arr[digits.length - 1]);
                start = false;
            }
        } else if (start === false && i !== digits.length - 1){
            arr.unshift(digits[i])
        }

        if (i === digits.length - 1 && digits[i] + 1 === 10) {
            arr.push(0);
            start = true;
        } else if (i === digits.length - 1) {
            arr.push(digits[i] + 1);
        }
    }
    return arr;
};

let arr = [2, 9]
console.log(plusOne(arr))