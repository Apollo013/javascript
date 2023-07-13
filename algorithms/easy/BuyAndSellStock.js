/*
@Source: LeetCode
@Challenge: You are given the heads of two sorted linked lists list1 and list2.
            Merge the two lists in a one sorted list. The list should be made by 
            splicing together the nodes of the first two lists.
            Return the head of the merged linked list.


Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
        
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints
1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

module.exports = {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    run: (prices) => {
        let maxProfit = 0,
            purchaseIndex = 0,
            sellIndex = 1;

        while (sellIndex < prices.length) {
            if (prices[purchaseIndex] < prices[sellIndex]) {
                maxProfit = Math.max(maxProfit, prices[sellIndex] - prices[purchaseIndex]);
            } else {
                purchaseIndex = sellIndex;
            }
            sellIndex++;
        }

        return maxProfit;
    },

    run2: (prices) => {
        let profit = 0,
            min = prices[0];

        for (let i = 0; i < process.length; i++) {
            min = Math.min(min, prices[i]);
            profit = Math.max(profit, prices[i] - min);
        }

        return profit;
    },
};
