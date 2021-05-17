var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  let dp = []
  dp[0] = 0;
  dp[1] = Math.min(cost[0], cost[1])
  for(let i=2; i<n; i++) {
    dp[i] = Math.min(dp[i-1] + cost[i], dp[i-2] + cost[i-1])
  }
  return dp[n-1]
};