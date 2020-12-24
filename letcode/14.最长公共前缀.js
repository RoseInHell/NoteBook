// js 
var longestCommonPrefix = function(strs) {
  strs.sort() //按编码排序
  if (strs.lenth === 0) return '';
  var first = strs[0];
  var end = strs[strs.length-1];

  // 正则目前还不会
  let exp = new RegExp(`^${first}`)
  if (first === end || end.match(exp)) return first


  for (let i=0; i<first.length; i++) {
    if (first[i] !== end[i]) {
      return first.substring(0,i); //匹配失败时返回相应字符串
    }
  }
  return first;
  
};

console.log(longestCommonPrefix(["flwssssssssssssssssss","flowsssser","flowssser"]))

//