// Write a function uniquePalindromeSubstrings that takes a string str as input and returns an array of all unique palindrome substrings in the string.

// A substring is a contiguous sequence of characters within a string. For example, the string "abc" has the substrings "a", "b", "c", "ab", "bc", and "abc".

// The function should return an array of all unique palindromic substrings in the input string. If there are no palindromic substrings in the input string, the function should return an empty array.

// Note that palindromic substrings should be considered unique even if they occur multiple times in the input string.

// Return the array sorted ASC.

function uniquePalindromeSubstrings(str) {
    const result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const substring = str.slice(i, j);
            if (isPalindrome(substring) && !result.includes(substring)) {
                result.push(substring);
            }
        }
    }

    return result.sort();
}

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

module.exports = {
    run: uniquePalindromeSubstrings,
};
