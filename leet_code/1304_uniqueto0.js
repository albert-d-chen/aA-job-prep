var sumZero = function(n) {
    let num = 1;
    let arr = new Array(n).fill(0);
    let i = 0;
    let count = n;
    
    if (n % 2 === 0) {
        console.log('yes')
        while (count > 0) {
            arr[i] = num;
            arr[i + 1] = -num;
            i += 2;
            count -= 2;
            num += 1;
        }
    } else if (n % 2 !== 0) {
        console.log('yes')
        while (count > 0) {
            if (count <= 1) {
                arr[i] = 0;
                count -= 1;
            } else {
                arr[i] = num;
                arr[i + 1] = -num;
                i += 2;
                count -= 2;
                num += 1;
            }   
        }
    }
    return arr;
};


let n = 3;
console.log(sumZero(n));