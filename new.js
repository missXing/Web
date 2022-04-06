function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype)

  const res = fn.call(obj, ...args)

  if (res && (typeof res === "object" || typeof res === "function")) {
    return res
  }

  return obj
}


function Parent(name) {
  this.name = name
}

Parent.prototype.say = function() {
  console.log(this.name)
}

const test = myNew(Parent, 'mx-------new')

test.say()