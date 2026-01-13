const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

//1.使用Set
// console.log(Array.from(new Set(array)))

//2.对象记录
function uniqueArray(arr){
    let res=[]
    let map={}
    for(const item of arr){
        if(!map[item]){
            map[item]=1
            res.push(item)
        }
    }
    return res
}
console.log(uniqueArray(array))