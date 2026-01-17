function mySetInternal(timer,fn){
  let timerId=null

    function loop(){
        timerId=setTimeout(()=>{
              fn()
              loop()
        },timer)
    }

    loop()

    return ()=>{clearTimeout(timerId)}
}