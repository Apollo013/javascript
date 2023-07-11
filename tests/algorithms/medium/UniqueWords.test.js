const solution = require("../../../algorithms/medium/UniqueWords");

describe("Testing Unique Words Algorithm", () => {
    it("should return ['hello', 'goodbye', 'bravo']", () => {
        let input = [
            ["hello", "goodbye", "alpha"],
            ["alpha", "bravo", "bravo"],
        ];

        const result = solution.run(input);
        expect(result).toEqual(["hello", "goodbye", "bravo"]);
    });
});
