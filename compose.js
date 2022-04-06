function compose(...fn) {
  if (!fn.length) return (v) => v
  if (fn.length === 1) return fn[0]

  return fn.reduce((pre, cur) => {
    return (...args) => {
      return pre(cur(...args))
    }
  })
}


function a(x) {
  return x + 1
}

function b(x) {
  return x * 10
}

function c(x) {
  return x - 1
}

const testFunction = compose(a, b, c)

const res = testFunction(3)

console.log(res)