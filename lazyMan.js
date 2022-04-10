class _LayzMan {
  constructor(name) {
    this.tasks = []
    const task = () => {
      console.log(`hi~ , this is ${name}`)
      this.next()
    }
    this.tasks.push(task)
    setTimeout(() => {
      // 把this.next()放在调用栈清空后执行
      this.next()
    }, 0)
  }

  next() {
    const task = this.tasks.shift()
    task && task()
  }

  sleep(time) {
    this._sleepWrapper(time, false)
    // 链式调用
    return this 
  }

  sleepFirst(time) {
    this._sleepWrapper(time, true)
    return this
  }

  _sleepWrapper(time, first) {
    const task = () => {
      console.log(`weak up after ${time}`)
      setTimeout(() => {
        this.next()
      }, time * 1000)
    }

    first ? this.tasks.unshift(task) : this.tasks.push(task)
  }

  eat(name) {
    const task = () => {
      console.log(`Eat ${name}`)
      this.next()
    }

    this.tasks.push(task)
    return this
  }
}

function layzMan(name) {
  return new _LayzMan(name)
}

layzMan('mx').eat('noodlekkk').sleepFirst(3).eat('kkkk')