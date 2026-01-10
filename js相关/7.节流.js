function throttle(fn, wait){
  // 这里赋值为 0，是为了保证第一次触发事件时，必然能立即执行
   let t=0
   return function(...args){
    //触发时的当地时间
    let t1=Date.now()
    if(t1-t>=wait){
        fn.call(this,...args)
        t=t1
    }
   }
}

function throttle2(fn,wait) {
    let timer=null
    return function(...args){
        if(timer)  return
        timer=setTimeout(() => {
            fn.call(this,...args)
            timer=null
        }, wait);
    }
}