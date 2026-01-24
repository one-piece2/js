
//Promise.all的作用：它接收一组异步任务，只有当所有任务都成功时才算成功，只要有一个失败，整个操作就失败。
function myPromiseAll(promises) {
  return new Promise((res, rej) => {
    if (!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`);
    }
    let result = [];
    let count = 0;
    let promisesNumber = promises.length;
    if (promisesNumber === 0) return res(result);
    //遍历传入的参数 用Promise.resolve将参数包裹一层 使其变成promise对象
    for (let i = 0; i < n; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          result[i] = value;
          count++;
          if (count === promisesNumber) {
            return res(result);
          }
        },
        (error) => {
          return rej(error);
        }
      );
    }
  });
}

