class EventEmitter {
  constructor() {
      // 缓存列表
      this.listener = {}
  }

  // 订阅
  on(eventName, fn) {
      // 如果对象中没有对应的 event 值，也就是说明没有订阅过，就给 event 创建个缓存列表
      // 如有对象中有相应的 event 值，把 fn 添加到对应 event 的缓存列表里
      if(!this.listener[eventName]){
          this.listener[eventName] = [];
      }
      this.listener[eventName].push(fn);
  }

  // 取消订阅
  off(eventName, fn) {
      let callbacks = this.listener[eventName];
      // 缓存列表中没有对应的fn，返回false
      if(!callbacks){
          return false;
      }
      if(!fn){
          // 如果未传入fn，则将缓存列表中对应的fn都清空
          callbacks && (callbacks.length = 0);
      } else {
        this.listener[eventName] = this.listener[eventName].filter(cb => cb != fn)
          // let cb;
          // // 遍历所对应的fn，判断和那个fn相同，相同则删除
          // for (let i = 0, cbLen = callbacks.length; i < cbLen; i++) {
          //     cb = callbacks[i];
          //     if (cb == fn || cb.fn == fn) {
          //         callbacks.splice(i, 1);
          //         break
          //     }
          // }
      }
  }

  // 监听一次
  // once(eventName, fn) {
  //     // 先绑定，运行时删除对应的值
  //     let on = (data) => {
  //         this.off(eventName, on);
  //         fn.apply(this, [data]);
  //     }

  //     on.fn = fn;
  //     this.on(eventName, on);
  // }

  once(eventName, fn) {
    fn.once = true
    this.on(eventName, fn)
  }

  // 发布
  emit(eventName, data) {
      const callbacks = this.listener[eventName];
      if(callbacks) {
        const len = callbacks.length
        for (let i = len; i > 0; i--) {
          const c = callbacks[i - 1]
          c(data)
          if (c.once) {
            this.off(eventName, c)
          }
        }
      }
  }
}

let a = new EventEmitter();
let b = new EventEmitter();
function aa(x) {
  console.log(x);
}
a.once("kak", aa)
a.on("kak", (data) => {
  console.log("1", data);
})

b.on("kak", aa)


a.emit('kak', 'hahahah-----');
// a.off('kak',aa);
a.emit('kak', 'kkkkk');

b.emit('kak', 'woshibbbbbbb-----');