

 Function.prototype.myBind=function(context,args1){
     // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context === null || context === undefined ? globalThis : Object(context);
  //这里的this是原函数
  const fn=this
  return function Fn(args2){
    //根据调用方式，传入不同的绑定值，当使用new Fn()的时候，this是Fn
     fn.apply(this instanceof Fn?this:context,[...args1,...args2])
  }
 }