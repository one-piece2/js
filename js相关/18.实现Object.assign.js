function myAssign(target,...args){
if(target===null||target===undefined){
    throw new TypeError('Cannot convert undefined or null to object')
}
let res=Object(target)
args.forEach((item,index)=>{
    if(item!==null&&item!==undefined){
        for(const key in item){
            if(Object.prototype.hasOwnProperty.call(item,key)){
                res[key]=item[key]
            }
        }
    }
})

return res

}