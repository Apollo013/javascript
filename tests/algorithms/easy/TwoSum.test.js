const solution = require("../../../algorithms/easy/TwoSum");

describe("Testing Two Sum Algorithm", () => {
    it("should return [0,1] for target: 9", () => {
        const result = solution.run([2, 7, 11, 15], 9);
        expect(result).toEqual([0, 1]);
    });

    it("should return [1,2] for target: 6", () => {
        const result = solution.run([3, 2, 4], 6);
        expect(result).toEqual([1, 2]);
    });

    it("should return [0,1] for target: 6", () => {
        const result = solution.run([3, 3], 6);
        expect(result).toEqual([0, 1]);
    });
});
