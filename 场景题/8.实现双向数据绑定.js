let obj={}
let input=document.getElementById('input')
let span=document.querySelector('span')

//数据劫持
Object.defineProperty(obj,'text',{
    configurable:true,
    enumerable:true,
    get(){
         console.log('获取数据了')
    },
    set(val){
     console.log('数据更新了')
    input.value = val
    span.innerHTML = val
    }
})

input.addEventListener('input',function(e){
    obj.text=e.target.value
})