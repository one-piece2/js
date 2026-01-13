

const dataFomart=(dateInput,format)=>{
    const day=dateInput.getDate()
     const month = dateInput.getMonth() + 1  
     const year = dateInput.getFullYear() 
      format = format.replace(/yyyy/, year)
    format = format.replace(/MM/,month)
    format = format.replace(/dd/,day)
    return format
}
console.log(dataFomart(new Date(),'yyyy/MM/dd'))
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') 