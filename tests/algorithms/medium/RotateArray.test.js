const solution = require("../../../algorithms/medium/RotateArray");

describe("Testing Rotate Array Algorithm", () => {
    it("should return [5, 6, 7, 1, 2, 3, 4]", () => {
        let input = [1, 2, 3, 4, 5, 6, 7],
            output = [5, 6, 7, 1, 2, 3, 4],
            k = 3;

        solution.run(input, k);
        console.log(input);
        expect(input).toEqual(output);
    });

    it("should return [4, 5, 6, 7, 1, 2, 3]", () => {
        let input = [1, 2, 3, 4, 5, 6, 7],
            output = [5, 6, 7, 1, 2, 3, 4],
            k = 10;

        solution.run(input, k);
        console.log(input);
        expect(input).toEqual(output);
    });
});
