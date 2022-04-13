function render(template, data) {
  let computed = template.replace(/\{\{(\w+)\}\}/g, function(match, key) {
    console.log(match)
    console.log(key)
    return data[key]
  })
  return computed
}

let template = '你好{{name}},欢迎来到{{address}}'

let data = {
  name: '喵喵',
  address: '我的世界'
}

const test = render(template, data)

console.log(test)