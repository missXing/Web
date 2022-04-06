// setTimeout 模拟实现 setinterval

function mySetinterval(fn, t) {
  let timer = null
  function interval() {
    fn()
    timer = setTimeout(interval, t)
  }

  interval()

  return {
    cancel: () => {
      clearTimeout(timer)
    }
  }
}



// setinterval 模拟实现setTimeout

function mySetTimeout(fn, t) {
  const timer = setInterval(() => {
    clearInterval(timer)
    fn()
  }, t)
}

function test() {
  console.log('1')
}

mySetTimeout(test, 2000)
// mySetinterval(test, 2000)