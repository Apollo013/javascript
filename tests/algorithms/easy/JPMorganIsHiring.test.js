const solution = require("../../../algorithms/easy/JPMorganIsHiring");

describe("Testing JPMorganIsHiring", () => {
    const expectedResult = "JRIRPOGNSIIGMAHN";

    it(`should return ${expectedResult} for JPMORGANISHIRING, 3`, () => {
        const result = solution.run("JPMORGANISHIRING", 3);
        expect(result).toEqual(expectedResult);
    });
});
