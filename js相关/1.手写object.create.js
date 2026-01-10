//Object.create  作用： 将传入的对象作为原型生成新的对象
function create(proto){
//构造函数
 const F=()=>{}
 F.prototype=proto
 return new F()
}

