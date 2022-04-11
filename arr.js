// 类数组转换为真实数组

let arrayLike = document.querySelectorAll('div')

// 拓展运算符
const test = [...arrayLike];

// Array.from
Array.from(arrayLike)

// Array.prototype.slice
Array.prototype.slice.call(arrayLike)

// Array.prototype.concat
Array.prototype.concat.apply([], arrayLike)

// Array.apply
Array.apply(null, arrayLike)