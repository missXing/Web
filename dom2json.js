function dom2Json(domTree) {
  let obj = {}
  obj.name = domTree.tagName
  obj.children = []
  domTree.childNodes.forEach((child) => obj.children.push(dom2Json(child)))
  return obj
}

