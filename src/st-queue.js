const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor(){
    this.storage = null;
  }

  getUnderlyingList() {
    return this.storage;
  }

  enqueue(value) {
    if (this.storage === null) {
      this.storage = new ListNode(value);
    } else {
      let currentNode = this.storage;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;  
      }
      currentNode.next = new ListNode(value);
    }
  }

  dequeue() {
    if (this.storage === null) {
      return null;
    }

    let delValue = this.storage.value;
    let second = this.storage.next;
    this.storage = second;
    return delValue;
  }

}

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

