
function isCycle(obj,parentPath=new Set()){
// 1. 基础类型判断：如果不是对象或者为 null，直接返回 false
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    // 2. 核心判断：如果当前对象已经在路径 Set 中存在，说明遇到了祖先节点 -> 有环
    if (parentPath.has(obj)) {
        return true;
    }
    parentPath.add(obj)
    
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            if(isCycle(obj[key],parentPath)){
                return true
            }
        }
    }
    parentPath.delete(obj)
    return false
}