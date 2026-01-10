function debounce(fn,time){
  let timer=null
  return function(...args){
   if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    //这里的this 指向调用内层匿名函数（即外层function）的人
    timer=setTimeout(()=>{
        fn.call(this,...args)
    },time)
  }
}