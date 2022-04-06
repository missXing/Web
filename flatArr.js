// 递归
// function flatter(arr) {
//   if (!arr.length) return
//   return arr.reduce((pre, curr) => {
//     return Array.isArray(curr) ? [...pre, ...flatter(curr)] : [...pre, curr]
//   }, [])
// }

// 迭代
function flatter(arr) {
  if (!arr.length) return
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}

const test = [1,2,['a', '3', ['ddd'], 'gg'], ['d', '0']]

const res = flatter(test)

console.log(res)