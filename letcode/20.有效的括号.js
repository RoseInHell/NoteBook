// js 解决要点 利用数据结构 栈
function a(item) {
  switch(item) {
    case ')' : return '(';
    case ']' : return '[';
    case '}' : return '{';
    default: return '';
  }
}
var isValid = function(s) {
  let length = s.length;
  if (s.length % 2 === 1) return false;
  let stack = [];
  for (let i=0; i<length; i++) {
    if(s[i] ==='(' || s[i]=== '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== a(s[i])) {
        return false;
      } 
    }
  }
  if (stack.length > 0) return false;
  return true;
};

// console.log(isValid("(){}}{"))
console.log(isValid("()"))
// console.log(isValid("(([]){})"))