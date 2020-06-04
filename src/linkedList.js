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
      count++;
      current = current.next; //Node after index
    }
    node.next = current;
    previous.next = node;
  }

  //get data from index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return;
  }

  //remove data from index
  removeData(index) {
    if (index > 0 && index > this.size) {
      throw Error('Index out of range');
    }

    let current = this.head;
    let previous;
    let count = 0;

    //remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current; // before deleting
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //Print data
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
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


export default LinkedList;
