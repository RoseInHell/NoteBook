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
  for (let i=0; i<length; i++) {
    for (let j=length-1; j>i; j-- ) {
      console.log(s[i], a(s[j]), (i+j)%2 ===1)
      if (s[i] === a(s[j]) && ((i+j)%2 ===1)) {
        s.pop
      }else {
        // return false
      }
    }
  }

  // let mid = length / 2
  // for (let i=0; i<length-1; i++) {
  //   console.log(s[i])
  //   if (s[i] === a(s[i+1])) {
  //     i++;
  //     console.log(123)
  //   } else if (s[i] === a(s[length-i-1])) {

  //   } else {
  //     return false
  //   }
  // }
  // return true
};

// console.log(isValid("(){}}{"))
// console.log(isValid("{[]}"))
console.log(isValid("(([]){})"))