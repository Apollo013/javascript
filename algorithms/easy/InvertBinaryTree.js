/*
@Source: LeetCode
@Challenge: Given the root of a binary tree, invert the tree, and return its root.
        
Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []


Constraints
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
*/

let obj = {
    run: (root) => {
        if (root == null) {
            return root;
        }

        obj.run(root.left);
        obj.run(root.right);

        const temp = root.left;
        root.left = root.right;
        root.right = temp;

        return root;
    },

    getValuesToArray: (root) => {
        let current = root,
            left = current.left,
            right = current.right,
            arr = [];
        arr.push(current.val);

        while (left && right) {
            arr.push(left.val);
            arr.push(right.val);
            current.left = current.left.left;
            current.right = current.right.right;
        }

        return arr;
    },
};

module.exports = obj;
