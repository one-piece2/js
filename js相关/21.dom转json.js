function domToJson(node){
if(node.nodeType===Node.TEXT_NODE){
    const text=node.textContent.trim()
    return text?{type:'text',content:text}:null
}
if(node.nodeType===Node.ELEMENT_NODE){
    const json={
       tageName:node.tageName.toLowerCase(),
       attributes:{},
       children:[]

    }
    if(node.attributes&&node.attributes.length>0){
           Array.from(node.attributes).forEach(attr=>{
               json.attributes[attr.name]=attr.value
           })
    }
    if(node.children&&node.children.length>0){
          node.children.forEach(chil=>{
            const res=domToJson(chil)
            json.children.push(res)
          })
    }
    return json
}
return null

}

function jsonToDom(json){
    if(json.type='text'){
        return document.createTextNode(json.content)
    }
    const ele=document.createElement(json.tageName)

    if(json.attributes){
        for (const [value,key] of Object.entries(json.attributes)){
            ele.setAttibute(key,value)
        }
    }
    if(json.children){
        json.children.forEach(child=>{
            ele.appendChild(jsonToDom(child))
        })
    }
    return ele
}