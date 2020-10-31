
function getMinimumDifference(a, b) {
    // Write your code here
    let ans = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) {
            ans.push(-1);
        } else if (isAnagram(a[i], b[i]).every(letterCount => letterCount === 0)) {
            ans.push(0);
        } else if (!isAnagram(a[i], b[i]).every(letterCount => letterCount === 0)) {
            let count = 0;
            isAnagram(a[i], b[i]).forEach(num => {
                if (num > 0) {
                    count += num;
                }
            })
            ans.push(count);
        }
    }
    console.log(ans);
    return ans;
}

function isAnagram(str1, str2) {
    let count = {};

    str1.split('').forEach(letter => {
        if (!count[letter]) {
            count[letter] = 0;
        }
        count[letter] += 1;
    })

    str2.split('').forEach(letter => {
        if (!count[letter]) {
            count[letter] = 0;
        }

        count[letter] -= 1;
    })

    return Object.values(count);
}

let a = ['tea', 'tea','act']
let b = ['ate', 'toe', 'acts']

console.log(getMinimumDifference(a, b));