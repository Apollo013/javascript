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
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

*/
const ListNode = require("../../models/ListNode");

module.exports = {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    run: (listNode1, listNode2) => {
        let mergedHead = new ListNode(-1, null),
            concurrent = mergedHead;

        while (listNode1 && listNode2) {
            if (listNode1.val <= listNode2.val) {
                concurrent.next = listNode1;
                listNode1 = listNode1.next;
            } else {
                concurrent.next = listNode2;
                listNode2 = listNode2.next;
            }

            concurrent = concurrent.next;
        }

        concurrent.next = listNode1 || listNode2;
        return mergedHead.next;
    },

    getValuesToArray: (listNode) => {
        const returnArray = [];

        // Single NodeList only !!!
        while (listNode) {
            returnArray.push(listNode.val);
            listNode = listNode.next;
        }

        return returnArray;
    },
};
