// js 暴力解法

var strStr = function(haystack, needle) {
  if (!needle) return 0;
  for (let i=0; i<haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let k = 0;
      for (let j=1; j<needle.length; j++) {
        if (haystack[i+j] === needle[j]) {
          k++;
        } else {
          break
        }
      }
      if (k === needle.length-1) {
        return i
      }
    }
  }
  return -1;
};

console.log(strStr('hello', 'll'))