function flat(array,depth){
    let res=[];
for (const item of array){
    if( Array.isArray(item)&&depth>0){
       res=[...res,...flat(item,depth-1)]
    }else{
        res.push(item)
    }
}
return res
}
let arr = [1, [2, [3, 4,[5,[6,[7]]]]]];
console.log(flat(arr,Infinity))