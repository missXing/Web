function listToTree(data) {
  let temp = {}
  let treeData = []

  for (let i = 0; i < data.length; i ++) {
    temp[data[i].id] = data[i]
  }

  for (let i in temp) {
    if (+temp[i].parentId !== 0) {
      temp[temp[i].parentId].children ?
        temp[temp[i].parentId].children.push(temp[i]) :
        temp[temp[i].parentId].children = [temp[i]]
    } else {
      treeData.push(temp[i])
    }
  }

  return treeData
}


const testData = [
  {
    id: 1,
    text: '节点1',
    parentId: 0
  }, {
    id: 2,
    text: '节点1_1',
    parentId: 1
  }
]

const test = listToTree(testData)

console.log(test)