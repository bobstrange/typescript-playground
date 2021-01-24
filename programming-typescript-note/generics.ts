// Tree

type TreeNode = {
  value: string
}

type LeafNode = TreeNode & {
  isLeaf: true
}

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

const a: TreeNode = {
  value: 'tree_a',
}

const b: LeafNode = {
  value: 'leaf_b',
  isLeaf: true,
}

const c: InnerNode = {
  value: 'inner_c',
  children: [b],
}

function mapNode<T extends TreeNode>(
  node: T,
  mapFunc: (value: string) => string
) {
  return {
    ...node,
    value: mapFunc(node.value),
  }
}

const mappedA = mapNode(a, (_) => _.toUpperCase())
const mappedB = mapNode(b, (_) => _.toUpperCase())
const mappedC = mapNode(c, (_) => _.toUpperCase())
