const solution = require("../../../algorithms/easy/ValidParenthesis");

describe("Testing Two Sum Algorithm", () => {
    it("should return true for ()", () => {
        const result = solution.run("()");
        expect(result).toEqual(true);
    });

    it("should return true for target: []", () => {
        const result = solution.run("[]");
        expect(result).toEqual(true);
    });

    it("should return true for target: {}", () => {
        const result = solution.run("{}");
        expect(result).toEqual(true);
    });

    it("should return false for )", () => {
        const result = solution.run(")");
        expect(result).toEqual(false);
    });

    it("should return false for ())", () => {
        const result = solution.run("())");
        expect(result).toEqual(false);
    });

    it("should return false for ({[{}[{}]})", () => {
        const result = solution.run("({[{}[{}]})");
        expect(result).toEqual(false);
    });

    it("should return true for target: ({[{}{}]})", () => {
        const result = solution.run("({[{}{}]})");
        expect(result).toEqual(true);
    });

    it("should return true for target: ({[]})", () => {
        const result = solution.run("({[]})");
        expect(result).toEqual(true);
    });
});
