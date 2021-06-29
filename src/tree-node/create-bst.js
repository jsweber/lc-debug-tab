const TreeNode = require('./tree-node')

/**
 * 
 * @param {array<number|string>} source  [1, null, 2, 2]
 * 
 * [1, 2, 3, 4, 5, 6, 7] => 
 * [1, null, 2, 2, 3, 5, 7]
 */
const createBST = source => {
    if (source.length === 0 || source[i] === null) return new TreeNode(null)
    // todo: 先去考虑有哪些树，再去考虑生成怎样的数组？？？
    // 根节点距离下一个左子数下标距离
    // （1）父节点，左右子数都在 -> next：根下标为左节点，step为2; 
    // （2）父节点，左子树为null，右节点存在 -> next：根下标为右节点，step为1
    // （3）父节点，左子数存在，右节点为null -> next：根下标为左节点，step为2
    // （4）父节点，左右节点都为null -> 不处理
    const parentQueue = [{
        index: 0,
        step: 1
    }]
    let rootNode = null
    
    while(parentNodeIndexStack.length > 0){
        const parent = parentQueue.shift()
        

    }

    return rootNode
}
// todo
const createArrayFromBSTree = () => {}


module.exports = createBST
