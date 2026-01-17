let imageAsync=(url)=>{

    return new Promise((res,rej)=>{
        let img=new Image()
        img.src=url
        img.omload=()=>{
         console.log('图片加载完成')
         res(img)
        }
        img.onerror=(err)=>{
                    console.log(`失败，此处进行失败的通用操作`);
                    rej(err);
                }
    })
}