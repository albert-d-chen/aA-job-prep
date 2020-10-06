// Determine whether an integer is a palindrome.An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;

    let rev = 0;
    while (rev < x) {
        rev *= 10;
        rev += x % 10;
        x = Math.trunc(x / 10);
    }
    return rev === x || Math.trunc(rev / 10) === x;
};