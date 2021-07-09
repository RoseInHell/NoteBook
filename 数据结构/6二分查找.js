function binarySearch(nums, target) {
  let len = nums.length;
  let left = 0;
  let right = len-1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}