const solution = require("../../../algorithms/misc/FixedSlidingWindow");

// Returns the correct maximum sum for a valid input array and k value
it("should return the correct maximum sum for a valid input array and k value", () => {
    const arr = [10, 20, 30, 40, 50, 60, 70];
    const k = 3;
    const result = solution.run(arr, k);
    expect(result).toBe(180);
});
