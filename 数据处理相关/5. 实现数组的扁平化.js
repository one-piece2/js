let arr = [1, [2, [3, 4,[5,[6,[7]]]]]];
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
console.log(flat(arr))