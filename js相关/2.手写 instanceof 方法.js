//instanceof 运算符用于判断一个对象是否是某个构造函数的实例，其原理是检查构造函数的 prototype 属性是否出现在对象的原型链上。
function myInstanceof(obj,constructor){
   if(obj===null||typeof obj!=='object'&&typeof obj!=='function'){
    return false
   }
   //传入对象的原型
   let objproto=Object.getPrototypeOf(obj)
   while(objproto!==null){
    //只有构造函数 才有prototype方法 获取构造函数指向的prototype
        if(objproto===constructor.prototype) return true
        objproto=Object.getPrototypeOf(objproto)
   }
   return false

}