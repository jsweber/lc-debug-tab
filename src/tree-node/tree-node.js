class TreeNode {
    constructor(val, left, right){
        this.val = val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }

    static showTree(node){
        if (node === null) return

        console.log(`======${node.val}=======`)
        if (node.left) {
            console.log(`${node.val}左节点：${node.left.val}`)
        } else {
            console.log(`${node.val}左节点：null`)
        }
        
        if (node.right) {
            console.log(`${node.val}右节点：${node.right.val}`)
        } else {
            console.log(`${node.val}右节点：null`)
        }
        
        TreeNode.showTree(node.left)
        TreeNode.showTree(node.right)
    }
}

module.exports = TreeNode
