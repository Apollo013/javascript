const ListNode = require("../../../models/ListNode");
const solution = require("../../../algorithms/easy/MergeTwoSortedLists");

describe("Testing Merge Two Sorted Lists Algorithm", () => {
    it("should return [1,1,2,3,4,4]", () => {
        let listNode1A = new ListNode(1, null);
        let listNode1B = new ListNode(2, null);
        let listNode1C = new ListNode(4, null);
        listNode1B.next = listNode1C;
        listNode1A.next = listNode1B;

        let listNode2A = new ListNode(1, null);
        let listNode2B = new ListNode(3, null);
        let listNode2C = new ListNode(4, null);
        listNode2B.next = listNode2C;
        listNode2A.next = listNode2B;

        const nodeList = solution.run(listNode1A, listNode2A);
        const result = solution.getValuesToArray(nodeList);
        expect(result).toEqual([1, 1, 2, 3, 4, 4]);
    });

    it("should return []", () => {
        const nodeList = solution.run(null, null);
        const result = solution.getValuesToArray(nodeList);
        expect(result).toEqual([]);
    });

    it("should return [0]", () => {
        let listNode2A = new ListNode(0, null);
        const nodeList = solution.run(null, listNode2A);
        const result = solution.getValuesToArray(nodeList);
        expect(result).toEqual([0]);
    });
});
