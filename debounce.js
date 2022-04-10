function debounce(fn, delay = 300) { 
  let time
  return (...args) => {
    clearTimeout(time)
    time = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}


function throttle(fn, delay = 300) {
  let time
  return (...args) => {
    if (time) return
    time = setTimeout(() => {
      fn(...args)
      time = null
    }, delay)
  }
}


window.addEventListener("scroll", debounce(() => {
  console.log(111)
}, 1000))


window.addEventListener("scroll", throttle(() => {
  console.log(222)
}, 1000))