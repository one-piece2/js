//方法1
Array.from(arrayLike);

//方法2
Array.prototype.slice.call(arrayLike)

//方法3
Array.prototype.splice.call(arrayLike,0)

//方法4
Array.prototype.concat.call([],arrayLike)

