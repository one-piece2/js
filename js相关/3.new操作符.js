//1.首先创建了一个新的空对象
//2.设置原型，将对象的原型设置为该函数的 prototype 对象（这样新对象可以访问函数上面的原型对象）
//3.让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
//4.判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
function myNew(fn,...args){
   if(typeof fn!=='function'){
    throw 'error'
   }
  
   //创建一个新的对象 并将这个对象的原型指向构造函数的prototype
let obj=new Object()
Object.setPrototypeOf(obj,fn.prototype)  //或者obj=Object.create(fn.prototype)
// 将 this 指向新建对象，并执行函数
let result=fn.apply(obj,args)
//判断返回结果
if(result===null) return obj
return (typeof result==='object'||typeof result==='function') ?result:obj
}