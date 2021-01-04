function palindrome (string) {
    let hash = {};
    let length = 0;

    for (let i = 0; i < string.length; i++) {
        if (!hash[string[i]] && string[i] !== ' ') {
            hash[string[i]] = 0;
        }

        if (string[i] !== ' ') {
            hash[string[i]] += 1;
            length += 1;
        }
    }

    if (length % 2 === 0) {
        return Object.values(hash).every(ele => ele % 2 === 0);
    } else {
        let count = 0;  
        let values = Object.values(hash);
        for (let value of values) {
            if (value % 2 !== 0) {
                count += 1;
            }
            if (count > 1) {
                return false;
            }
        }
        return true;
    }


}

//if even length, letters have to be even count
//if odd length, have to be even count but 1
let s = 'car raceefg';

console.log(palindrome(s));