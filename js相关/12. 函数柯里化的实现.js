//函数柯里化指的是一种将使用多个参数的一个函数 ---> 转换成一系列使用一个参数的函数的技术。

function curry(fn,...args){
   
// 1. 当收集到的参数个数 >= 原函数定义的参数个数时，执行原函数
 if(args.length>=fn.length){
    return fn.apply(this,args)
 }
// 2. 否则，返回一个继续收集参数的匿名函数
  return function(...nextArgs){
      // 递归调用 curry，将之前收集的 args 和本次收集的 nextArgs 合并
    // 使用 call(this) 确保上下文在嵌套调用中不丢失
    return curry.call(this,...args,...nextArgs)
  }
}