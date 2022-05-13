var traverse = function(matrix) {
  const res = []
  while (matrix.length) {
    const first = matrix.shift()
    res.push(...first)
    for (const m of matrix) {
      let val = m.pop()
      if (val)
        res.push(val)
      m.reverse()
    }
    matrix.reverse()
  }
  return res
};

// let a = [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]
let a = [
  [7],
  [9],
  [6]
]
let tt = traverse(a)

console.log(tt)