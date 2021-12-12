class Scheduler {
  constructor() {
      this.concurrency = 0
      this.queue = []
  }
  async add(promiseFunc) {
      if (this.concurrency >= 2) {
          return new Promise(r => {
              this.queue.push(() => promiseFunc().then(r))
          })
      }
      this.concurrency += 1
      await promiseFunc()
      this.concurrency -= 1
      let next = this.queue.shift()
      if (next) {
          this.add(next)
      }
  }
}

const scheduler = new Scheduler()
const timeout = (time) => {
  return new Promise(r => setTimeout(r, time))
}
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
      .then(() => console.log(order))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)