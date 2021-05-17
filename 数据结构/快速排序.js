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