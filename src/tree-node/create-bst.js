const TreeNode = require('./tree-node')

const isEmpty = v => v === null || v === undefined

/**
 * 
 * @param {array<number|string>} source  [1, null, 2, null, null, 2]
 */
const createBST = source => {
    if (!Array.isArray(source) || source.length === 0) return null
    // 从当前节点查找左子节点2k+1, 右子节点2k+2
    
    let rootNode = null, node = null

    for (let i = 0; i < source.length; i++){
        const val = source[i]
        if (i === 0){
            node = new TreeNode(val)
            rootNode = node
        }
        if (val === null) continue
        
        const leftVal = source[2 * i + 1]
        const rightVal = source[2 * i + 2]

        // console.log(i, leftVal, rightVal, isEmpty(leftVal))

        if (!isEmpty(leftVal)) {
            node.left = new TreeNode(leftVal)
        }

        if (!isEmpty(rightVal)) {
            node.right = new TreeNode(rightVal)
        }

        if (!isEmpty(leftVal)){
            node = node.left
        } else if (!isEmpty(rightVal)){
            node =node.right
        }
    }

    return rootNode
}


// todo
const createArrayFromBSTree = () => {}
//todo 能不能把null缩减些
const root = createBST([1, null, 15,  null, null, 23, null, null, null, null, null, 30, 35])
TreeNode.showTree(root)


module.exports = createBST
