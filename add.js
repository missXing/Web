// 看不懂这个是要干嘛。。。。
function add(...args) {
  let allArgs = [...args]

  function fn(...newArgs) {
    allArgs = [...allArgs, ...newArgs]
    console.log('allArgs-----')
    console.log(allArgs)
    return fn
  }

  fn.toString = () => {
    if (!allArgs.length) return

    return allArgs.reduce((sum, cur) => sum + cur)
  }

  return fn
}

const test = add(1)(2)(3)()

// const args = add(1)(2)(3)().toString()

console.log(test)
// console.log(args)