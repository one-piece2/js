//async和await版本
async function asyncPool(limit,tasks){
  const result=[]
  const executing=new Set() //正在执行的任务
  for(const task of tasks){
    const p=Promise.resolve().then(()=>task())
    result.push(p)
    executing.add(p)

    //任务执行完后要清除任务
    const clean=()=>executing.delete(p)
    p.then(clean).catch(clean)

    if(executing.size>=limit){
        await Promise.race(executing)
    }
  }
  return Promise.all(result)
}

//递归版本
function limit(count,arry,iter)

