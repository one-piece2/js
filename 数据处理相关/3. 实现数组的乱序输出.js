for( let i=0;i<arr.length;i++){
    //[i,arr.length-1]
    const rondomIndex=Math.floor(Math.random()*(arr.length-i))+i;
    [arr[i],arr[rondomIndex]]=[arr[rondomIndex],arr[i]]
}

//洗牌算法：从后往前遍历数组 随机交换 交换的下标范围是[0,i]
function shuffle(arr){
    for(let i=arr.length-1;i>=0;i++){

        //  [0,i]
        const j=Math.floor(Math.random()*(i+1))
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}