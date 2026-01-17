function findMostWord(artical){
if(!artical) return
artical=artical.trim().toLowerCase()
const words=artical.match(/[a-z]+/g)
const map = {};
let maxCount = 0; // 记录当前出现的最多次数
for(let word of words ){
  map[word]=(map[word]||0)+1

  if(map[word]>maxCount){
    maxCount=map[word]
  }
}
const resultWords = [];
  for (const word in map) {
    if (map[word] === maxCount) {
      resultWords.push(word);
    }
  }

  return {
    words: resultWords, // 出现频率最高的单词数组
    count: maxCount     // 出现的次数
  };
}
