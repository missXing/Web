Function.prototype.myCall = function(context, ...args) {
  if (!context || context === null) context = window

  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol()

  // this指向调用call的函数
  context[fn] = this

  // 执行函数并返回结果 相当于把自身作为传入的context的方法进行调用了
  return context[fn](...args)
}

// apply原理一致  只是第二个参数是传入的数组
Function.prototype.myApply = function(context, args) {
  if (!context || context === null) context = window

  let fn = Symbol()

  context[fn] = this

  return context[fn](...args)
}


// bind实现要复杂一点  因为他考虑的情况比较多 还要涉及到参数合并(类似函数柯里化)
Function.prototype.myBind = function(context, ...args) {
  if (!context || context === null) context = window

  let fn = Symbol()
  context[fn] = this
  const _this = this

  const result = function(...innerArgs) {
    // 第一种情况 :若是将 bind 绑定之后的函数当作构造函数，通过 new 操作符使用，则不绑定传入的 this，而是将 this 指向实例化出来的对象
    // 此时由于new操作符作用  this指向result实例对象  而result又继承自传入的_this 根据原型链知识可得出以下结论
    // this.__proto__ === result.prototype   //this instanceof result =>true
    // this.__proto__.__proto__ === result.prototype.__proto__ === _this.prototype; //this instanceof _this =>true
    if (this instanceof _this === true) {
      // 此时this指向指向result的实例  这时候不需要改变this指向
      this[fn] = _this
      this[fn](...[...args, ...innerArgs])
    } else {
      // 如果只是作为普通函数调用  那就很简单了 直接改变this指向为传入的context
      context[fn](...[...args, ...innerArgs])
    }
  }

  result.prototype = Object.create(this.prototype)

  return result
}





function Product(name) {
  this.name = name
}

function Food(name, age) {
  Product.myApply(this, [name])
  this.age = age
}

const res = new Food('ccc', 19)

console.log(res)