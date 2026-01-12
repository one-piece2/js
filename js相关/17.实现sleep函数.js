function sleep(timeout){
 return new Promise((res,rej)=>{
    setTimeout(res, timeout);
 })
}