const solution = require("../../../algorithms/easy/Pallindrome");

describe("Testing Pallindrome Algorithm (easy)", () => {
    it("should return true for 'A man, a plan, a canal: Panama'", () => {
        const result = solution.run("A man, a plan, a canal: Panama");
        expect(result).toEqual(true);
    });

    it("should return false for 'race a car'", () => {
        const result = solution.run("race a car");
        expect(result).toEqual(false);
    });

    it("should return true for ' '", () => {
        const result = solution.run(" ");
        expect(result).toEqual(true);
    });

    it("should return false for 'I Hear You'", () => {
        const result = solution.run("I Hear You");
        expect(result).toEqual(false);
    });
});
