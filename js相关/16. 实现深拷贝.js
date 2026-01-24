/**
 * 深拷贝：深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，
 * 因此对象获得的一个新的引用类型而不是一个原有类型的引用。
 * 深拷贝对于一些对象可以使用 JSON 的两个函数来实现，但是由于 JSON 的对象格式比 js 的对象格式更加严格，
 * 所以如果属性值里边出现函数或者 Symbol 类型的值时，会转换失败.
 */

//1.JSON.stringify()将js对象序列化成（JSON字符串），再使用JSON.parse来反序列化(还原)js对象。
let obj1 = {
  a: 0,
  b: {
    c: 0,
  },
};
let obj2 = JSON.parse(JSON.stringify(obj1));
obj1.a = 1;
obj1.b.c = 1;
console.log(obj1); // {a: 1, b: {c: 1}}
console.log(obj2); // {a: 0, b: {c: 0}}

//2.手写实现深拷贝函数
function deepclone(obj,cacha=new WeakMap()) {
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Function) {
    return function (...args) {
    return  obj.call(this, ...args);
    };
  }

  if (!obj || typeof obj !== "object") {
    return obj;
  }
  if(cacha.has(obj)){
    return cacha.get(obj)
  }
  let newObject = Array.isArray(obj) ? [] : {};
  cacha.set(obj,newObject)
  for (const x in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, x)) {
      newObject[x] = deepclone(obj[x],cacha);
    }
  }
  return newObject;
}
