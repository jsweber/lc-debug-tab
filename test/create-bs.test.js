const { assert } = require('chai')
const TreeNode = require('../src/tree-node/tree-node')
const { createBT } = require('../src/tree-node/create-bst')

describe('test create-bs', () => {
	

	it('TreeNode', () => {
		const node = new TreeNode('root')
		const left = new TreeNode('left')
		const right = new TreeNode()

		node.left = left
		node.right = right
		
		assert.equal(node.val, 'root')
		assert.equal(left.val, 'left')
		assert.equal(right.val, null)

		node.left = left
		node.right = right
		assert.equal(node.left.val, 'left')
		assert.equal(node.right.val, null)
	})
})
