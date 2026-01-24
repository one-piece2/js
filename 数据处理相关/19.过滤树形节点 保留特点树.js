//type=2的父节点 或者 子节点含type=2的树的父节点都会被保留
const input=[
  {
    id: 1,
    type: 2,
    children: [
      {
        id: 3,
        type: 0,
        children: [{ id: 5, type: 2, children: [] }]
      },
      {
        id: 4,
        type: 3,
        children: []
      }
    ]
  },
  {
    id: 2,
    type: 0,
    children: [{ id: 6, type: 1, children: [] }] 
  }
];
function filiterType2(array){
  function dfs(array){
    let res=[]
    for(const item of array){
        const filiterChildren=(item.children&&item.children.length)?dfs(item.children):[]
        if(item.type===2||filiterChildren.length>0){
           res.push({
            ...item,
            children:filiterChildren
           })
        }
    }
    return res
  }
 return dfs(array)
}



function filiterByType2(array){
    return array.map(item=>{
        const filiterChildren=item.children?filiterByType2(item.children):[]
        const isMatch=item.type===2||filiterChildren.length>0
        if(isMatch){
            return {
                ...item,
                children:filiterChildren
            }
        }
        return null
    }).filter(Boolean)
}
console.dir(filiterByType2(input),{depth:null})
