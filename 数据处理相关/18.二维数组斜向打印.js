function printMatrix(arr){
  let m = arr.length, n = arr[0].length
	let res = []
    //对角线上
    for(let row=0;row<m;row++){
        for(let col=row,j=0;col>=0,j<=row;col--,j++){
            res.push(arr[j][col])
        }
    }
    //对角线下
    for(let row=1;row<m;row++){
        for(let i=row,j=n-1;i<=m,j>row;i++,j--){
            res.push(arr[i][j])
        }

    }
    return res
}

console.log(printMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]))
