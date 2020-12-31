// js归并排序
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
};

console.log(merge([2], 1, [1], 1))