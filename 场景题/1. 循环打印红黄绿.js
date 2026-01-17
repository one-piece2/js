//异步编程方法：红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；三个灯不断交替重复亮灯
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
//1.用 promise 实现
const task=(timer,light)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(light==='red'){
                red()
            }else if(light==='green'){
                green()
            }else if(light==='yellow'){
                yellow()
            }
            res()
        },timer)
    })
}
const step=()=>{
    task(3000,'red').then(()=>{
    task(1000,'green')
}).then(()=>{
    task(2000,'yellow')
}).then(()=>{
    step()
})
}
step()

//2.用 async/await 实现
const runtask=async()=>{
   await task(3000, 'red')
    await task(2000, 'green')
    await task(2100, 'yellow')
    runtask()
}
runtask()