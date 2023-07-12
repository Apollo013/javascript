const solution = require("../../../algorithms/easy/VaildAnagram");

describe("Testing Vaild Anagram Algorithm", () => {
    it("should return true for s = 'anagram', t = 'nagaram'", () => {
        let s = "anagram",
            t = "nagaram";
        const result = solution.run(s, t);
        expect(result).toEqual(true);
    });

    it("should return false for s = 'rat', t = 'car'", () => {
        let s = "rat",
            t = "car";
        const result = solution.run(s, t);
        expect(result).toEqual(false);
    });
});
