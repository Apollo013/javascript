const solution = require("../../../algorithms/easy/BinarySearch");

describe("Testing Binary Search Algorithm", () => {
    it("should return 4 for [-1,0,3,5,9,12], target = 9", () => {
        const result = solution.run([-1, 0, 3, 5, 9, 12], 9);
        expect(result).toEqual(4);
    });

    it("should return 2 for [-1,0,3,5,9,12], target = 3", () => {
        const result = solution.run([-1, 0, 3, 5, 9, 12], 3);
        expect(result).toEqual(2);
    });

    it("should return -1 for [-1,0,3,5,9,12], target = 2", () => {
        const result = solution.run([-1, 0, 3, 5, 9, 12], 2);
        expect(result).toEqual(-1);
    });

    it("should return 0 for [5], target = 5", () => {
        const result = solution.run([5], 5);
        expect(result).toEqual(0);
    });

    it("should return 1 for [2,5], target = 5", () => {
        const result = solution.run([2, 5], 5);
        expect(result).toEqual(1);
    });
});
