const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor(nodeValue) {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    let node = new TreeNode(data);
    if (this.rootElement === null) {
      this.rootElement = node;
    } else {
      this.addNewNode(this.rootElement, node);
    }

  }

  addNewNode(rootNode, currentNode) {
    if (currentNode.data < rootNode.data) {
      if (rootNode.left === null) {
        rootNode.left = currentNode;
      } else {
          this.addNewNode(rootNode.left, currentNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = currentNode;
      } else {
          this.addNewNode(rootNode.right, currentNode);
      }
    }
  }

  has(data) {
    return this.searchByValue(this.rootElement, data).hasValue;
  }

  searchByValue(currentNode, data) {
    const result = {
      node: null,
      hasValue: false
    };
    if (currentNode === null) {
      result.node = currentNode;
      result.hasValue = false;
      return result;
    } else if (data < currentNode.data) {
      return this.searchByValue(currentNode.left, data);
    } else if (data > currentNode.data) {
      return this.searchByValue(currentNode.right, data);
    } else {
      result.node = currentNode;
      result.hasValue = true;
      return result;
    }
  }

  find(data) {
    return this.searchByValue(this.rootElement, data).node;
  }

  remove(data) {
    this.root = this.removeByValue(this.rootElement, data);  
  }

  removeByValue(currentNode, data) {
    if (currentNode === null) {
      return null;
    } else if (data < currentNode.data) {
      currentNode.left = this.removeByValue(currentNode.left, data);
      return currentNode;
    } else if (data > currentNode.data) {
      currentNode.right = this.removeByValue(currentNode.right, data);
      return currentNode;
    } else {
      
      if (currentNode.left === null && currentNode.right === null) {
        currentNode = null;
        return currentNode;
      }
      
      if (currentNode.left === null) {
        currentNode = currentNode.right;
        return currentNode;
      } else if(currentNode.right === null) {
        currentNode = currentNode.left;
        return currentNode;
      }
      
      let insteadNode = this.searchMin(currentNode.right);
      currentNode.data = insteadNode.data;
      currentNode.right = this.removeByValue(currentNode.right, insteadNode.data);
      return currentNode;
    }
  }

  min() {
    if (this.rootElement === null) {
      return null;
    }
    return this.searchMin(this.rootElement).data;
  }

  searchMin(currentNode) {
    if (currentNode.left === null) {
      return currentNode;
    } else {
      return this.searchMin(currentNode.left);
    }
  }

  max() {
    if (this.rootElement === null) {
      return null;
    }
    return this.searchMax(this.rootElement).data;  
  }

  searchMax(currentNode) {
    if (currentNode.right === null) {
      return currentNode;
    } else {
      return this.searchMax(currentNode.right);
    }
  }

}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}