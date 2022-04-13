function isObject(val) {
  return typeof val === 'object' && val !== null
}

function flatten(obj) {
  if (!isObject(obj)) return 

  let res = {}

  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`)
        })
      } else {
        for (let key in cur) {
          dfs(cur[key], `${prefix}${prefix?'.':''}${key}`)
        }
      }
    } else {
      res[prefix] = cur
    }
  }
  dfs(obj, '')
  return res
}

const obj = {
  a: {
    b: 3,
    c: [1,2,9],
    d: {
      name: 'mx'
    }
  },
  b: 999,
  c: 0,
  f: null
}

const test = flatten(obj)

console.log(test)