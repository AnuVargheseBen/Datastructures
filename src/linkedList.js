//For creating node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//For linkedlist operations
class LinkedList {
  constructor(data, head) {
    this.head = null;
    this.size = 0;
  }
  //insert first node
  insertData(data) {
    // console.log("hi",this.head);
    this.head = new Node(data, this.head);
    this.size++;
  }
  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    //if empty
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
  //insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
     throw Error('Index out of range');
    }
    if (index === 0) {
      this.insertData(data);
      return;
    }
    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // before inserting the new node
      // console.log('previous', previous);
      count++;
      current = current.next; //Node after index
    }
    node.next = current;
    // console.log('previous1',previous);
    previous.next = node;
  }
  //Print data
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

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

export default LinkedList;
