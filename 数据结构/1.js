var maxProfit = function(prices) {
  let min = 0;
  let big = 0;
  let profit = 0;
  for(let i=1; i<prices.length; i++) {
    if (prices[i] < prices[min]) {
      min = i;
      big = min + 1 
    }
    if (i > min && prices[i] > prices[big]) {
      big = i
    }
    if (prices[big] -prices[min] > profit) {
      profit = prices[big] -prices[min]
    }
  }
  return profit
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([2,4,1]))
console.log(maxProfit([1,2]))