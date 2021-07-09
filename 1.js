var permute = function(nums) {
  const res = [];
  for (let i=0; i<nums.length; i++) {
    for (let j=0; j<nums.length; j++) {
      var temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      res.push([...nums])
      temp = nums[i]
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }
  return res;
};

console.log(permute([1,2,3]))
// console.log(permute([0,1]))