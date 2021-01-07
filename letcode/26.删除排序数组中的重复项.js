var removeDuplicates = function(nums) {
  let newNum = new Set(nums)
  console.log(newNum)
  let list = [...newNum]
  console.log(list)
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])