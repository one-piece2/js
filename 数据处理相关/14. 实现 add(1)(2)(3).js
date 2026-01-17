function add1(num1){
  return function(num2){
    return function(num3){
        return num1+num2+num3
    }
  }
}

//参数长度不固定
function  add(...args){
  return args.reduce((a,b)=>a+b)
}

function currying(fn){
    let args=[]
    return function temp(...newargs){
         if(newargs.length){
          args=[...args,...newargs]
           return temp
         }else{
          //这里的this指向temp的调用者
          let val=fn.apply(this,args)
          //清空，让柯里化后的函数可以复用
          args=[]
          return val
         }
        
    }
}