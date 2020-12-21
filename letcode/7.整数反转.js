// javascript
var reverse = function(x) {
  let r = 0;
  while (x !== 0) {
    r = r * 10 + x % 10
    x =  parseInt(x / 10); // x = (x / 10) | 0;
  }
  if (r > Math.pow(2,31) || r < - Math.pow(2,31)-1) return 0;
  return r; 
  
}

reverse(123)

// c
int reverse(int x) {
  long long r = 0;
  while (x) {
    r = r * 10 + x % 10;
    x /= 10; 
  }

  if (r > pow(2,31) || r < -pow(2,31) -1) {
    return 0;
  }
  return r;
}