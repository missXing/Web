function add(a, b) {
  let maxLength = Math.max(a.length, b.length)

  a = a.padStart(maxLength, 0)
  b = b.padStart(maxLength, 0)

  let t = 0
  // 进位
  let f = 0
  let sum = ''

  for (let i = maxLength - 1; i >= 0; i --) {
    t = parseInt(a[i]) + parseInt(b[i]) + f
    f = Math.floor(t / 10)
    sum = t % 10  + sum
  }

  if (f !== 0) {
    sum = f + sum
  }

  return sum
}

const a = '9007199254740991'
const b = '1234567899999999999'

const test = add(a, b)

console.log(test)