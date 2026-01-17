Array.prototype.myFilter=function(fn){
  if(typeof fn!=='function'){
    throw TypeError('must function')
  }
  const res=[]
  for(let i=0;i<this.length;i++){
    fn(this[i])&&res.push(this[i])
  }
  return res
}