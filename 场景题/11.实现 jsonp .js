function addScript(src){
    const script=document.createElement('script')
    script.src=src
     //给 <script> 标签设置 type 属性，值为 "text/javascript"，明确告诉浏览器 “这是一个 JavaScript 脚本文件”。
    script.type='text/javascript'
    document.body.appendChild(script)
}