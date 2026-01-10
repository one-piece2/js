//Promise.race的作用：接收一组异步任务 谁最先出结果 就返回谁 无论成功还是失败
function myPromiseRace(promises) {
  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      //使用promise.resolve包裹数组的没一项，兼容是普通值得情况。
      //给每个promise都注册一个then并且传入外层promise得res和rej谁先完成就谁调用.（因为Promise的状态只能从pending变为fulfilled 或 rejected 一次，所以只有最先执行的那个会生效，后续的都会被忽略。）
      Promise.resolve(promises[i]).then(res, rej);
    }
  });
}
