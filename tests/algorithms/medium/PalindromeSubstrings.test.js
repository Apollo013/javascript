const solution = require("../../../algorithms/medium/PalindromeSubstrings");

describe("Testing Palindrome Substrings", () => {
    it.only("should return ['a','abcba','abcbabcba','b','bab','bcb','bcbabcb','c','cbabc']", () => {
        let input = "abcbabcba";

        const result = solution.run(input);
        expect(result).toEqual(["a", "abcba", "abcbabcba", "b", "bab", "bcb", "bcbabcb", "c", "cbabc"]);
    });

    it.only("should return ['f','i','ifi','l','ll','llupifipull','lupifipul','p','pifip','pullup','pullupifipullup','u','ullu','ullupifipullu','upifipu']", () => {
        let input = "pullupifipullup";

        const result = solution.run(input);
        expect(result).toEqual(["f", "i", "ifi", "l", "ll", "llupifipull", "lupifipul", "p", "pifip", "pullup", "pullupifipullup", "u", "ullu", "ullupifipullu", "upifipu"]);
    });

    it.only("should return ['a','aceca','c','cec','e','r','racecar']", () => {
        let input = "racecar";

        const result = solution.run(input);
        expect(result).toEqual(["a", "aceca", "c", "cec", "e", "r", "racecar"]);
    });

    it.only("should return ['a','aoa','m','maoam','o']", () => {
        let input = "maoam";

        const result = solution.run(input);
        expect(result).toEqual(["a", "aoa", "m", "maoam", "o"]);
    });
});
