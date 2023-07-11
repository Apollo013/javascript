const solution = require("../../../algorithms/easy/BuyAndSellStock");

describe("Testing Buy & Sell Stock Algorithm", () => {
    it("should return 5", () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = solution.run(prices);
        expect(result).toEqual(5);
    });

    it("should return 0", () => {
        const prices = [7, 6, 4, 3, 1];
        const result = solution.run(prices);
        expect(result).toEqual(0);
    });
});
