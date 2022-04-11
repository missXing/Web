function currying(fn, ...args) {
  const length = fn.length

  let allArgs = [...args]

  const res = (...newArgs) => {
    allArgs = [...allArgs, ...newArgs]

    if (allArgs.length === length) {
      return fn(...allArgs)
    } else {
      return res
    }
  }

  return res
}

const add = (a,b,c) => {
  return a + b + c
}

const a = currying(add, 1)

const b = a(3)(4)

// c = b(4)

console.log(b)