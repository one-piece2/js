
/*
浅拷贝是指：一个新的对象对原始对象的属性值进行精确地拷贝，如果拷贝的是基本数据类型，拷贝的就是基本数据类型的值。
如果是引用数据类型，拷贝的就是内存地址。
如果其中一个对象的引用内存地址发生改变，另一个对象也会发生变化。
*/

//方法1：Object.assign() 第一个参数是目标对象 其余是源对象
let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target,object2,object3);  

//方法2：扩展运算符
let obj1 = {a:1,b:{c:1}}
let obj2 = {...obj1};
obj1.a = 2;
console.log(obj1); //{a:2,b:{c:1}}
console.log(obj2); //{a:1,b:{c:1}}
obj1.b.c = 2;
console.log(obj1); //{a:2,b:{c:2}}
console.log(obj2); //{a:1,b:{c:2}}

//如果是数组：
//方法1：slice()
{let arr = [1,2,3,4];
console.log(arr.slice()); // [1,2,3,4]
console.log(arr.slice() === arr); //false
}
//方法2：concat():  concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
let arr = [1,2,3,4];
console.log(arr.concat()); // [1,2,3,4]
console.log(arr.concat() === arr); //false

//手写
function shallowCopy(object){
     // 只拷贝对象
  if (!object || typeof object !== "object") return;
// 根据 object 的类型判断是新建一个数组还是对象
  let newObject = Array.isArray(object) ? [] : {};
  for(let x in object){
  // 只拷贝对象自身的属性，忽略原型链上的属性
    if(object.hasOwnProperty(x)){
        object[x]=newObject[x]
    }
  }
  return newObject
}
