// js

var aaa = function(i) {
  switch(i) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return 0;
  }
}

var romanToInt = function(s) {
  let listB = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
  let result = 0;
  x = s.split('')
  for (let i=0; i<x.length; i++) {
    if (aaa(x[i]) < aaa(x[i+1])) {
      result = result + Math.abs(aaa(x[i]) - aaa(x[i+1]));
      i++;
    } else {
      result = result + aaa(x[i]);
    }
  }
  console.log(result);
};


romanToInt('MCMXCIV')