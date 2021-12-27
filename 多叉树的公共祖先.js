interface  TreeNode {id: string; children: TreeNode[]}

const lowestCommonAncestor = function(root, arr) {
  if (!root || arr.includes(root)) {
    return root
  }

  const children = root.children

  const len = children.length

  const set = new Set()

  for (let i = 0; i < len; i ++) {
    set.add(lowestCommonAncestor(children[i], arr))
  }

  if (set.size === 1) {
    return Array.from(set)[0]
  } else if (set.size === 2 && set.has(null)) {
    return Array.from(set)[0] === null ? Array.from(set)[1] : Array.from(set)[0]
  } else {
    return root
  }
}

{
  id: '11',
  children: [
    {
      id: '22',
      children: []
    },
    {
      id: '33',
      children: []
    }
    
  ]
}