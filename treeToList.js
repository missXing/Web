function treeToList(data) {
  let res = []
  const dfs = (tree) => {
    tree.forEach(item => {
      if (item.children) {
        dfs(item.children)
        delete item.children
      }
      res.push(item)
    })
  }

  dfs(data)

  return res
}


const testData = [
  {
    id: 1,
    text: '节点1',
    parentId: 0,
    children: [
      {
        id: 2,
        text: '节点1_1',
        parentId: 1
      }
    ]
  }
]

const test = treeToList(testData)
console.log(test)