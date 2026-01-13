let arr = [1, 2, 3, 4, 5, 6] 
function add(arr){
    let total=0
    for(let item of arr){
        if(Array.isArray(item)){
            total+=add(item)
        }else{
            total+=item
        }
    }
    return total
}
console.log(add(arr)) 