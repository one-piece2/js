Array.prototype.myMap=function(fn){
 if(typeof fn !=='function'){
   throw TypeError('type error')
 }
 const arr=[]
 for(let i=0;i<this.length;i++){
    arr.push(fn(this[i]))
 }
 return arr
}