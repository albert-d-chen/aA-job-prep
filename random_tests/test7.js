function coprimeCount(A) {
    let b = [];
    
   
    for (let i = 0; i < A.length; i++) {
        let value = 1;
        let count = 0;
        let arr = [];
        if (A[i] === 1) {
            arr.push(1);
        }
        while (value < A[i]) {
            if (coPrime(value, A[i])) {
                arr.push(value);
            }
            value += 1;
        }
        b.push(arr.length);
    }
    
    return b;
}

function coPrime(value1, value2) {
    let divisor = 2;
    while (divisor < value2) {
        if (value1 % divisor === 0 && value2 % divisor === 0) {
            return false;
        } else {
            divisor += 1;
        }
    }
    return true;
}

let array = [1,3];
console.log(coprimeCount(array))