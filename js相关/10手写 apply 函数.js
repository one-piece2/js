

Function.prototype.myApply=function(context,args){
  if(typeof this!=='function'){
    throw new TypeError('error type')
  }

  let result=null
  context =(context===null||context===undefined)?globalThis:Object(context)

  const key=Symbol()
  context[key]=this
  if(!args){
    result=context[key]()
  }else{
       result=context[key](...args)
  }

  delete context[key]
  return result

}