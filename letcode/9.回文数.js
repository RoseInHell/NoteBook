// js
// 字符串解法
// var isPalindrome = function(x) {
//   if (x < 0) return false;
//   let stringA = String(x);
//   let list = stringA.split('');
//   let i=0;
//   let mid = parseInt((i + list.length) / 2);
//   let length = list.length;
//   for (i=0; i<length; i++) {
//     if (length % 2 === 0 ) {
//       console.log(111)
//       if (list.shift(i) !== list.pop(length-1-i)) return '不是回文数'
//       if (i === mid && list[mid] ===list[mid+1]) return '回文数'
//     } else if (length % 2 === 1) {
//       console.log(i)
//       if (i !== mid && list.shift(i) !== list.pop(length-1-i)) return '不是回文数'
      
//       if (i === mid) return '回文数';
//     }
//   }
// }
// 除余数解法
var isPalindrome = function(x) {
  if (x<0 || (x%10===0 && x!==0)) return false;
  

  let r = 0;
  while (x > r) {
    r = r * 10 + x % 10;
    x = parseInt(x / 10)
  }
  if (x === r || x === parseInt(r/10)) return true;
  return false;
  
  
}
console.log(isPalindrome(10))


// c
bool isPalindrome(int x){
  if (x<0 || (x%10==0 && x!=0)) {
      return false;
  }
  int r = 0;
  while (x> r) {
      r = r * 10 + x % 10;
      x = x / 10;
  }
  return x == r || x == r/10;
}
