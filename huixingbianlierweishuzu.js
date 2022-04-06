function traverse(arr) {
  let res = [];
  while (arr.length) {
    res = res.concat(arr.shift())

    for (let i = 0; i < arr.length; i ++) {
      res.push(arr[i].pop())
    }

    res = res.concat((arr.pop() || []).reverse())

    for (let i = arr.length - 1; i >= 0; i --) {
      res.push(arr[i].shift())
    }
  }

  return res
}

let a = [[1,2,3], [8,9,4], [7,6,5]]
let tt = traverse(a)

console.log(tt)