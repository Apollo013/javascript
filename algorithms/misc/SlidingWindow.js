// Given an array of integers of size ‘n’. Calculate the maximum sum possible
// for ‘k’ consecutive elements in the array.
//
// Input  : [10, 20, 30, 40, 50, 60, 70]
//
//          k = 3

function fixedSlidingWindow(arr, k) {
    if (k > arr.length) {
        return null;
    }

    let maxValue = 0,
        currentMax = 0;

    maxValue = arr.slice(0, 3).reduce((prev, next) => prev + next, 0);
    currentMax = maxValue;
    console.log(maxValue);

    for (let i = k; i < arr.length; i++) {
        currentMax += arr[i] - arr[i - k];
        maxValue = Math.max(maxValue, currentMax);
    }

    return maxValue;
}

console.log(fixedSlidingWindow([10, 20, 30, 40, 50, 60, 70], 3));
