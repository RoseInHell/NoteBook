var searchInsert = function(nums, target) {
  let mid = parseInt(nums.length / 2);
  let small = 0;
  let big = nums.length -1;
  if (target > nums[big]) return (big+1)
  if (target < nums[small]) return 0;
  while(small < big) {
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      big = mid;
    } else {
      small = mid + 1;
    }
    mid = parseInt((small + big)/ 2);
  }
  return mid;
};

console.log(searchInsert([1,3,5,6], 7))