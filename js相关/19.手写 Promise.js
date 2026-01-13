const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
function isPromiseLike(obj){
    return typeof obj?.then==='function'
}
class MyPromise {
  //私有属性
  #state = PENDING;
  #value;
  //then可以被多次调用 回调要放在数组里面依次调用
  #handleders = [];
  #runTask() {
    //注册微任务
    queueMicrotask(()=>{
        if (this.#state !== PENDING) {
      this.#handleders.forEach((cb) => cb());
      //执行完清除任务
      this.#handleders = [];
    }
    })
    
  }
  //new 的时候接收一个可执行函数
  constructor(executor) {
    //箭头函数绑定类实例
    const resolve = (val) => {
        if (isPromiseLike(val)) {
        val.then(resolve, reject);
        return;
      }
      this.#setState(FULFILLED, val);
    };
    const reject = (reason) => {
        
      this.#setState(REJECTED, reason);
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      // 如果有错误，就直接执行 reject
      reject(error);
    }
  }
  #setState(state, value) {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#value = value;
    //then里面如果是异步方法，那么在这里执行then里面的回调
    this.#runTask();
  }
  //then方法返回promise
  then(onFulfilled, onRejected) {
    // 参数默认值处理（防止没传参报错）
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };

    return new MyPromise((resolve, reject) => {
      this.#handleders.push(() => {
        try {
            let res
          //这里的this是老promise，也就是调用then方法的那个promise
          if (this.#state === FULFILLED) {
            res = onFulfilled(this.#value);
          } else if (this.#state === REJECTED) {
             res = onRejected(this.#value);
          }

          if(isPromiseLike(res)){
            res.then(resolve,reject)
          }else{
            resolve(res)
          }
        } catch (error) {
          reject(error);
        }
      });
//由于他是运行的then里面的回调，是异步的 所以它要放在异步队列中
      this.#runTask();
    });
  }
}
