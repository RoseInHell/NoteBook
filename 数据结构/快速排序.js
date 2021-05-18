/* 
  快速排序：基本思想， 找基准，排序
  平均时间复杂度 O(n logn)
  最好情况 O(n logn)
  最坏情况 O(n*n)
  空间复杂度 O(logn)
  稳定性：不稳定

  1.从数列中挑出一个元素，称为 “基准”（pivot）;
 
  2.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；

  3.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；
*/


function quick_sort(arr, from, to) {
  var i = from; // 哨兵i
  var j = to; // 哨兵j
  var key = arr[from] // 标准值

  if (from >= to) { // 数组中只有一个元素退出
    return;
  }

  while(i < j) {

    // 从右边往左边找第一个小于key的数，找到或者两个哨兵相碰，跳出循环
    while(arr[j] > key && i < j) {
      j--;
    }
    /* 
      从左边向右边找第一个比key大的数，
      找到或者两个哨兵相碰，跳出循环，
      这里的=号保证在本轮循环结束前，
      key的位置不变，否则的话跳出循环，
      交换i和from的位置的时候，
      from位置的上元素有可能不是key 
    */
    while(arr[i] <= key && i < j) {
      i++;
    }
    /*
		  代码执行道这里，
      1、两个哨兵到找到了目标值。
      2、j哨兵找到了目标值。
      3、两个哨兵都没找到(key是当前数组最小值)
		*/
    if(i < j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  arr[from] = arr[i];
  arr[i] = key;
  quick_sort(arr, from, i-1);
  quick_sort(arr, i+1, to);
}

var arr = [3,2,1];
quick_sort(arr, 0, arr.length-1);