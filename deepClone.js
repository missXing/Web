function isObject(val) {
  return typeof val === 'object' && val !== null
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj

  if (hash.has(obj)) {
    return hash.get(obj)
  }

  let target = Array.isArray(obj) ? [] : {}

  hash.set(obj, target)

  Reflect.ownKeys(obj).forEach(item => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash)
    } else {
      target[item] = obj[item]
    }
  })

  return target
}

const a = {'a': 1, 'b': 2}
const b = deepClone(a)

b['a'] = 44

console.log('a: ', a, 'b: ', b)