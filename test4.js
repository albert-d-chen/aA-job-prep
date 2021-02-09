function compareStrings(s1, s2) {
    // Write your code here
    let newS1 = '';
    let newS2 = '';
    
    for (let i = 0; i < s1.length; i++) {
        let letter1 = s1[i];

        for (let j = i + 1; j < s1.length; j++) {
            if (s1[j] === '#') {
                i = j;
            } else {
                break;
            }
        }
        newS1 += s1[i];
    }
    for (let i = 0; i < s2.length; i++) {
        let letter1 = s2[i];

        for (let j = i + 1; j < s2.length; j++) {
            if (s2[j] === '#') {
                continue;
            } else if (s2[j] !== '#'){
                i = j;
                break;
            }
        }
        console.log(newS2);
        newS2 += s2[i];
    }
    
    // for (let i = 0; i < s1.length; i++) {
    //     let letter2 = s2[i];

    //     if (s2[i + 1] === '#' || letter2 === '#') {
    //         continue;
    //     } else {
    //         newS2 += letter2;
    //     }
    // }
    console.log(newS1, newS2)
    return newS1 
}
// let s1 = 'axx#bb#c';
let s1 = 'hacc#kk#'
// let s2 = 'axbd#c#c';
let s2 = 'hb##ackk##';
console.log(compareStrings(s1,s2))