function repeat(s,n){
    return new Array(n+1).fill('').join(s)
}
let a='12'

function repeact(s,n){
    return n>0 ? s.concat(repeact(s,--n)):''
}


console.log('a'.repeat(3))