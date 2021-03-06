import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  /* 
   * @param {Function} [comparatorFunction]
  */
 
  constructor(comparatorFunction) {
    /* @var LinkedListNode */
    
    this.head = null;

    /* @var LinkedListNode */
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * @param {*} value
   * @return {linkedList}
   */
  prepend(value) {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  } 

  /* 
    @param {*} value
    @return {LinkedList}
  */
  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }
}