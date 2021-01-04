// js 异或方法 异或方法具有交换律

var singleNumber = function(nums) {
   return nums.reduce((pre,cur) => {
    console.log(pre, cur)
    return pre ^ cur
  })
};

// console.log(singleNumber([4,1,2,1,2]))
