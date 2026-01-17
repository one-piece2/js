let arr = [1, [2, [3, 4,[5,[6,[7]]]]]];
// 1.递归
function flat(arr){
    let res=[]
    for(let item of arr){
        if(Array.isArray(item)){
        //   res=res.concat(flat(item))
        //   res= [...res,...flat(item)]
        res.push(...flat(item))
        }else{
            res.push(item)
        }
    }
    return res
}


//2.reduce递归
function flat2(arr){
  return arr.reduce((pre,next)=>{
        return [...pre,...(Array.isArray(next)?flat2(next):[next])]
  },[])
}

//3.不递归
function flat3(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr=[].concat(...arr)
    }
    return arr
}

console.log([].concat(1,2,3,[4]))