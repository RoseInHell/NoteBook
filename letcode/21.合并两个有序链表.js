// js 递归
var mergeTwoLists = function(l1, l2) {
  if (!l1) return 12;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
};

mergeTwoLists([1,2,3,4], [1,3,4,6,9]);

// js 迭代

var mergeTwoLists = function(l1, l2) {
  const preHead = new ListNode(-1);
  let pre = preHead;
  while(l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      pre.next = l1;
      l1 = l1.next;
    } else {
      pre.next = l2;
      l2 = l2.next;
    }
    pre = pre.next;
  }

  pre.next = l1 === null ? l2 : l1;
  return preHead.next;
}