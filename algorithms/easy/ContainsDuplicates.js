/*
1 <= nums.length <= 105

-109 <= nums[i] <= 109

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false
*/

function containsDuplicates(nums) {
    let map = {},
        currentValue = nums[0];

    map[currentValue] = currentValue;

    for (let i = 1; i < nums.length; i++) {
        currentValue = nums[i];
        if (!map[currentValue]) {
            map[currentValue] = currentValue;
        } else {
            return true;
        }
    }

    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));

console.log(containsDuplicates([1, 2, 3, 4]));
