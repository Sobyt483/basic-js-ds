const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor(){
    this.treeRoot = null
  }

  root() {
    return this.treeRoot
  }

  add(data) {
    const newData = new Node(data)
    let prevNode = null
    function checkNode (node, value){
      if (node === null){
        node =  new Node(value)
        if (prevNode.data < node.data){
          prevNode.right = node
        }else {
          prevNode.left = node
        }
      }else{
        prevNode = node
        if (value > node.data){
          checkNode(node.right, value)
        }else {
          checkNode(node.left, value)
        }
      }
    }
    if(this.treeRoot === null){
      this.treeRoot = newData
    }else {
      checkNode(this.treeRoot, data)
    }
  }

  has(data) {
    let boolean = null
    function checkNode(node, data){
      if (node === null){
        boolean = false
        return
      }
      if(node.data === data){
        boolean = true
        return
      }else {
        if(data > node.data){
          if(node.data !== null){
            checkNode(node.right, data)
          }
        }else {
          if(node.data !== null){
            checkNode(node.left, data)
          }
        }
      }
    }
    checkNode(this.treeRoot, data)
    return boolean
  }

  find(data) {
    let node = this.treeRoot
    while (true){
      if (node === null){
        return null
      }
      if(node.data === data){
        return node
      }else {
        if (data > node.data){
          node = node.right
        }else{
          node = node.left
        }
      }
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);
    function removeNode(cur, data){
      if(cur === null){
        return null
      }
      if (cur.data === data){
        if (cur.left === null&&cur.right === null){
          return null
        }
        if (cur.right === null){
          cur = cur.left
          return cur
        }
        if (cur.left === null){
          cur = cur.right
          return cur
        }
        let minNode = cur.right
        while (minNode.left !== null){
          minNode = minNode.left
        }
        cur.data = minNode.data
        cur.right = removeNode(cur.right, minNode.data)
        return cur
      }else if (data > cur.data){
        cur.right = removeNode(cur.right, data)
        return cur
      }else {
        cur.left = removeNode(cur.left, data)
        return cur
    }
  }
}

  min() {
    let node = this.treeRoot
    while(true){
      if (node.left === null){
        return node.data
      }else {
        node = node.left
      }
    }
  }

  max() {
    let node = this.treeRoot
    while(true){
      if (node.right === null){
        return node.data
      }else {
        node = node.right
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};
