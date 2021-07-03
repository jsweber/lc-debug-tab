const TreeNode = require('./tree-node')

const isEmpty = v => v === null || v === undefined

const calcLeftIndexleftIsNull = i => i + 1
const calcLeftIndexRightIsNull = i => i + 2
const calcLeftIndexNoNull = i => 2 

/**
 * 
 * @param {array<number|string>} source  [1, null, 2, 2] [1, 2, null, 2], []
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

const createBT = source => {
    if (!Array.isArray(source) || source.length ===0 ) return null  

    let isLeft = true,
        node = new TreeNode(source[0])
    
    
    const root = node,
        parentNodeQueue = []
    parentNodeQueue.unshift(node)

    for (let i = 1; i < source.length; i++){
        node = parentNodeQueue[0]

        if (isLeft){
            if (source[i] !== null){
                node.left = new TreeNode(source[i])
                parentNodeQueue.push(node.left)
            }
            isLeft = false
        } else {
            if (source[i] !== null){
                node.right = new TreeNode(source[i])
                parentNodeQueue.push(node.right)
            }
            parentNodeQueue.shift()
            isLeft = true
        }
    }


    return root
}


// todo
const createArrayFromBSTree = () => {}
//todo 能不能把null缩减些
const root = createBT([1, null, 2, 12, 13, null, 20, 30, 40])
// TreeNode.showTree(root)


module.exports = {
    createBT
}
