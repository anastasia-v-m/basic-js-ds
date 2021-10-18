const { NotImplementedError, ListNode } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let arr = [];
  if (l === undefined || l === null) {  
    return l;
  } else {
    let newArr = getNewList(l, k, arr);
    return convertArrayToList(newArr); 
  }
}

function getNewList(node, value, arr) {
  if (node.value !== value) {
    arr.push(node.value);
  }
  if (node.next === undefined || node.next === null) {
    return arr;
  } else {
    getNewList(node.next, value, arr);
  }
  return arr;    
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}


