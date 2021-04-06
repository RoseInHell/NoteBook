import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  /* 
    @param {Function} [comparatorFunction]
  */
  constructor(comparatorFunction) {
    /* @var LinkedListNode */
    this.head = null;

    /* @var LinkedListNode */
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
  }
}