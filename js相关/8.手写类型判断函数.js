function getType(value){
    if(value===null){
        return 'null'
    }
    if(typeof value==='object'){
      let valueClass= Object.prototype.toString.call(value) //"[object String]"
       let type = valueClass.split(" ")[1].split("");
       type.pop()
       return type.join('').toLowerCase()
    }else{
        // 判断数据是基本数据类型的情况和函数的情况
        return typeof value
    }
}