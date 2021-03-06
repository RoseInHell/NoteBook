/* 
  归并排序：基本思想， 先把所有元素递归分成一个，然后排序
  平均时间复杂度 O(n logn)
  最好情况 O(n logn)
  最坏情况 O(n logn)
  空间复杂度 O(n)
  稳定性：稳定

  1.申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；

  2.设定两个指针，最初位置分别为两个已经排序序列的起始位置；

  3.比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；

  4.重复步骤 3 直到某一指针达到序列尾；

  5.将另一序列剩下的所有元素直接复制到合并序列尾。
*/

function mergeSort(arr) { //采用自上而下的递归方法
  var len = arr.length;
  // 当数组只剩一个元素时就返回 开始 merge
  if (len < 2) {
    return arr;
  }
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  // 两个数组进行合并
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  while(left.length) result.push(left.shift());

  while(right.length) result.push(right.shift());
  
  return result;
}

console.log(mergeSort([ 0, -1, 3, 4, 10 ]))