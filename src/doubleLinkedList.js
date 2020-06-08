class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }
  // insert at tail
  insertTail(data) {
    if (!this.tail) {
      this.head = this.tail = new Node(data);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(data);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
    this.size++;
  }

  //insert at head
  insertHead(data) {
    if (!this.head) {
      this.head = this.tail = new Node(data);
    } else {
      let oldHead = this.head;
      this.head = new Node(data);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
    this.size++;
  }

  //delete head
  deleteHead() {
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.data;
    }
  }

  //delete tail
  deleteTail() {
    if (!this.deleteTail) {
      return null;
    } else {
      let removedTail = this.tail;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.data;
    }
  }

  //delete at index
  deleteAt(index) {
    if (index > 0 && index > this.size) {
      throw Error('Index out of range');
    }
    let count = 0;
    let previousNode;

    if (index === 0) {
      this.deleteHead();
    } else {
      let current = this.head;
      while (count < index) {
        count++;
        previousNode = current; //before deleting
        current = current.next;
      }
      previousNode.next = current.next;
      current.prev = previousNode;
    }
  }

  //search a value
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  //print data
  printData() {
    let current = this.head;
    while (current) {
      console.log('Data:', current.data);
      current = current.next;
    }
  }

  //moving to array
  toArray() {
    const listArray = [];
    let current = this.head;
    while (current) {
      listArray.push(current.data);
      current = current.next;
    }
    return listArray;
  }
}
export default DoubleLinkedList;
// let ll = new DoubleLinkedList();
// ll.insertHead(34);
// ll.insertHead(32);
// ll.insertTail(37);
// ll.insertTail(45);
// ll.deleteAt(0);
// // console.log(ll);
// ll.printData();
