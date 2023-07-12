const TreeNode = require("../../../models/TreeNode");
const solution = require("../../../algorithms/easy/InvertBinaryTree");

describe("Testing Invert Binary Tree Algorithm", () => {
    it("should return [4,7,2,9,6,3,1]", () => {
        // Input: root = [4,2,7,1,3,6,9]

        let root = new TreeNode(4, null, null);
        let treeNode1B = new TreeNode(2, null, null);
        let treeNode1C = new TreeNode(7, null, null);
        let treeNode1D = new TreeNode(1, null, null);
        let treeNode1E = new TreeNode(3, null, null);
        let treeNode1F = new TreeNode(6, null, null);
        let treeNode1G = new TreeNode(9, null, null);

        root.left = treeNode1B;
        root.right = treeNode1C;

        treeNode1B.left = treeNode1D;
        treeNode1B.right = treeNode1E;

        treeNode1C.left = treeNode1F;
        treeNode1C.right = treeNode1G;

        const treeList = solution.run(root);
        const result = solution.getValuesToArray(treeList);
        expect(result).toEqual([4, 7, 2, 9, 6, 3, 1]);

        expect(treeList.val).toEqual(4);
        expect(treeList.left.val).toEqual(7);
        expect(treeList.right.val).toEqual(2);
        // Theres more to check but this will be sufficient
    });
});
