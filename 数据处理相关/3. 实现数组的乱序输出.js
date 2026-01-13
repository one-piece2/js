for( let i=0;i<arr.length;i++){
    const rondomIndex=Math.floor(Math.random()*(arr.length-i))+i;
    [arr[i],arr[rondomIndex]]=[arr[rondomIndex],arr[i]]
}