const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');
console.log(ListNode)

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
class Queue {
  constructor(){
    this.start = null
  }

  getUnderlyingList() {
    return this.start
  }

  enqueue(data) {
    if (this.start === null){
      this.start = new ListNode(data)
    }else {
      let node = this.start
      while(node !== null){
        if (node.next === null){
          node.next = new ListNode(data)
          return
        }else{
          node = node.next
        }
      }
    }
  }

  dequeue() {
    const val = this.start.value
    this.start = this.start.next
    return val
  }
}

module.exports = {
  Queue
};

// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(JSON.stringify(queue.getUnderlyingList()))