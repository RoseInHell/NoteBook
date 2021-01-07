var addBinary = function(a, b) {
  let ans = "";
  let ca = 0;
  for(let i=a.length-1, j=b.length-1; i>=0 || j>=0; i--,j--) {
    let sum = ca;
    sum += i >= 0 ? parseInt(a[i]) : 0;
    
    sum += j >= 0 ? parseInt(b[j]) : 0;
    console.log(sum)
    ans += sum % 2;
    
    ca = Math.floor(sum / 2);
  }
  console.log(ans)
  if (ca===1) {
    ans += ca
  }
  

  return ans.split('').reverse().join('');
};
console.log(addBinary('111', '1'))