// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or - 1 if needle is not part of haystack.

var strStr = function (haystack, needle) {
    if (!needle.length) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] && haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1;
};