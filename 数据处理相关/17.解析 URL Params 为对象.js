let Url1 =
  "https://soundheart.cn?user=miku&user=chengxin&password=%E5%8C%97%E4%BA%AC&OK";
let Url2 =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";

function parseParms(url) {
  let conent = url.split("?")[1];
  let paramsArray = conent.split("&");
  let result = {};
  for (const i of paramsArray) {
    const [key, value] = i.split("=");
   
    if (value) {
         let val = decodeURIComponent(value); //解码
      if (result.hasOwnProperty(key)) {

        result[key] = [].concat(result[key], val);
      } else {
        result[key] = val;
      }
    } else {
      result[key] = true;
    }
  }
  return result;
}
console.log(parseParms(Url1));
console.log(parseParms(Url2));
