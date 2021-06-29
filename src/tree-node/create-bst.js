const TreeNode = require('./tree-node')

/**
 * 
 * @param {array<number|string>} source  [1, null, 2, 2]
 */
const createBST = source => {
    let parentNode = null

    for (let i = 0; i < source.length; i+=3){
        if (source[i] === undefined) break
        const val = source[i]
        const node = new TreeNode(val)

        // if (){}

    }
}
