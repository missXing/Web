class Mypromise {
  constructor(fn) {
    // 状态
    this.state = 'pending'
    // then注册的成功函数
    this.successFun = []
    // then注册的失败函数
    this.failFun = []

    let resolve = (val) => {
      // 保持状态不可逆（resolve和reject只能触发一个）
      if (this.state !== 'pending') return

      // 成功触发 改变状态并执行then注册的回调事件
      this.state = 'success'
      // 为了保证then事件先注册（考虑promise里写同步代码）promise规范 这里模拟异步
      setTimeout(() => {
        // 执行当前事件里注册的所有函数
        this.successFun.forEach(item => item.call(this, val))
      })
    }

    let reject = (err) => {
      if (this.state !== 'pending') return

      this.state = 'fail'
      setTimeout(() => {
        this.failFun.forEach(item => item.call(this, err))
      })
    }

    // 调用函数
    try {
      fn(resolve, reject)
    } catch(err) {
      reject(err)
    }
  }

  // 实例方法then
  then(resolveCallback, rejectCallback) {
    // 判断回调是否是函数
    resolveCallback = typeof resolveCallback === 'function' ?
      rejectCallback : (v) => v

    rejectCallback = typeof rejectCallback === 'function' ?
      rejectCallback : (err) => {throw err}

    // 为了保证链式调用继续返回promise
    return new Mypromise((resolve, reject) => {
      // 将回调注册到successFun事件合集里面
      this.successFun.push((val) => {
        try {
          // 执行回调函数
          let x = resolveCallback(val)
          // 如果回调结果是普通值，直接resolve给下一个then链式调用，如果是promise对象，
          // 通过then方法将resolve和reject传进去，等x内的异步执行完毕就会自动执行传入的resolve
          // 这样就控制了链式调用的顺序
          x instanceof Mypromise ? x.then(resolve, reject) : resolve(x)
        } catch (err) {
          reject(err)
        }
      })

      this.failFun.push((val) => {
        try {
          let x = rejectCallback(val)
          x instanceof Mypromise ? x.then(resolve, reject) : reject(x)
        } catch (err) {
          reject(err)
        }
      }) 
    })
  }

  // 静态方法
  static all(promiseArr) {
    let result = []
    // 声明一个计数器 每一个promise返回就加一
    let count = 0

    const length = promiseArr.length

    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < length; i ++) {
        // 为了防止不是promise类型的数据传进来 这里使用promise.resolve包装一下
        Promise.resolve(promiseArr[i]).then(
          (res) => {
            // 这里不能直接push数组 要控制顺序一一对应
            result[i] = res
            count ++
            // 所有promise执行完后resolve出去
            if (count === length) resolve(result)
          },
          (err) => reject(err)
        )
      }
    })
  }

  // 静态方法
  static race(promiseArr) {
    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i ++) {
        Promise.resolve(promiseArr[i]).then(
          // 只要有任何一个promise状态变更 就可以返回
          (res) => resolve(res),
          (err) => reject(err)
        )
      }
    })
  }
}


// 利用race的竞争性 实现promise的取消
function wrap(pro) {
  let obj = {}

  // 构造用来竞争的promise
  let p1 = new Promise((resolve, reject) => {
    obj.resolve = resolve
    obj.reject = reject
  })

  obj.promise = Promise.race([p1, pro])
  return obj
}

let testPro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 1000)
})

let wrapPro = wrap(testPro)

wrapPro.promise.then((res)=> {
  console.log(res)
})

// wrapPro.resolve("被拦截了")