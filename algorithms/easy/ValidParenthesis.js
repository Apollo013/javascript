/*
@Source: LeetCode
@Challenge: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
            An input string is valid if:
                A) Open brackets must be closed by the same type of brackets.
                B) Open brackets must be closed in the correct order.
                C) Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

*/

module.exports = {
    /**
     * @param {string} s
     * @return {boolean}
     */
    solution: (s) => {
        if (s === undefined || s === null || s.length === 0 || s.length % 2 > 0) return false;

        const openBrackects = "[{(";
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (openBrackects.indexOf(s[i]) > -1) {
                stack.push(s[i]);
            } else {
                const previousChar = stack.pop();

                if (previousChar === undefined) return false;
                if (previousChar === "[" && s[i] !== "]") return false;
                if (previousChar === "{" && s[i] !== "}") return false;
                if (previousChar === "(" && s[i] !== ")") return false;
            }
        }

        return stack.length === 0;
    },
};
