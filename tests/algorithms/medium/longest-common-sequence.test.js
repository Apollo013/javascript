const solution = require("../../../algorithms/medium/longest-common-sequence");

describe.only("Testing Longest Common Subsequence Algorithm", () => {
    it("should return 3 for text1 = 'abcde', text2 = 'ace'", () => {
        let text1 = "abcde",
            text2 = "ace";
        const result = solution.run(text1, text2);
        expect(result).toEqual(3);
    });

    it("should return 3 for text1 = 'abc', text2 = 'abc'", () => {
        let text1 = "abc",
            text2 = "abc";
        const result = solution.run(text1, text2);
        expect(result).toEqual(3);
    });

    it("should return 0 for text1 = 'abc', text2 = 'def'", () => {
        let text1 = "abc",
            text2 = "def";
        const result = solution.run(text1, text2);
        expect(result).toEqual(0);
    });

    it("should return 0 for text1 = 'abc', text2 = 'def'", () => {
        let text1 = "ezupkr",
            text2 = "ubmrapg";
        const result = solution.run(text1, text2);
        expect(result).toEqual(2);
    });
});
