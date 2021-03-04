/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.
The last method lowestCommonAncestor is optional. Complete it only if you could tackle all the rest.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // adds node to left if value is less than or equal to this.value
  // adds node to right if value is greater than node
  add(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new BinaryTree(value);
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new BinaryTree(value);
      }
    }
  }

  // returns true or false if the value is in the tree
  contains(value) {
    // if value we're looking for is equal to current value
    // return true
    if (this.value === value) {
      return true;
    } else {
      // else return false
      return false;
    }
  }

  // apply callback in this order: left node, current node, right node
  traverseDepthFirstInOrder(fn) {
    // let result = [];
  }

  // apply callback from left to right across each level
  // hint: use a queue for this!
  traverseBreadthFirst(fn) {}

  // OPTIONAL
  // Finds the lowest common ancestor given 2 node values
  // restrictions: val1 < val2
  // return the LCA (the node)
  // returns null if any of the values are not in the tree
  lowestCommonAncestor(val1, val2) {}
}

module.exports = BinaryTree;
