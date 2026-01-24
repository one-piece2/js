function doSomething(num) {
  // 步骤1：转字符串，处理边界（比如传入NaN/Infinity的情况）
  if (typeof num !== 'number' || isNaN(num)) return num;
  let numStr = num.toString();
  
  // 步骤2：分离整数部分和小数部分
  let [integerPart, decimalPart] = numStr.split('.');
  // 初始化小数部分拼接串
  let decimalStr = decimalPart ? '.' + decimalPart : '';
  
  // 步骤3：整数部分长度<3，直接返回（拼接小数部分）
  if (integerPart.length < 3) {
    return integerPart + decimalStr;
  }
  
  // 步骤4：计算整数部分分组的余数
  let remainder = integerPart.length % 3;
  let result = '';
  
  // 步骤5：按余数分组（核心逻辑）
  if (remainder > 0) {
    // 前remainder位 + 逗号 + 剩余部分按每3位分组
    result = integerPart.slice(0, remainder) + ',' + 
             integerPart.slice(remainder).match(/\d{3}/g).join(',');
  } else {
    // 直接按每3位分组（注意slice(3)，避免开头多一个逗号）
    result = integerPart.slice(0, 3) + ',' + 
             integerPart.slice(3).match(/\d{3}/g).join(',');
  }
  
  // 步骤6：拼接小数部分并返回
  return result + decimalStr;
}

function thousandSeparator(num){
//转字符串
let [intergerPart,decimaPart]=num.toString().split('.')
let count=0
let arr=[]
for(let i=intergerPart.length-1;i>=0;i--){
  count++
  arr.push(intergerPart[i])
  if(count%3===0&&i!==0){
    arr.push(',')
  }
  
}
let result=arr.reverse().join('')
if(decimaPart){
  result+='.'+decimaPart
}
return result
}