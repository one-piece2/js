function myPromiseRetry(promisefn, nums) {
 return  Promise.resolve(promisefn())
    .then((val) => {
      return val;
    })
    .catch((nums) => {
      if (count > 0) {
       return myPromiseRetry(promisefn, nums - 1);
      }else{
         throw err
      }
    });
}


async function myPromiseRetry2(promisefn,nums){
    for(let i=0;i<nums-1;i++){
          try{
            return await promisefn()
          }catch(err){
            if(i===nums) throw err
          }
    }
}

function myPromiseRetry3(promisefn,count,delay){
    return new Promise((res,rej)=>{
        const attempt=(nums)=>{
            promisefn().then(res).catch((err)=>{
                  if(nums===count){
                    rej(err)
                  }else{
                    setTimeout(attempt(nums+1),delay)
                  }
            })
        }
        attempt(0)
    })
}