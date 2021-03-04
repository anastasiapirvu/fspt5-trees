/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.

//Last three methods are optional. Complete them only if you could tackle all the rest.
---------------------- */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // adds a child into the tree
  addChild(value) {
    // push a new tree into the current tree's children
    let newNode = new Tree(value);
    this.children.push(newNode);
  }

  // returns true/false if the value is in the tree
  contains(expectedValue) {
    // if the tree value matches the value passed in
    // return true
    // else
    // loop through all the children
    // call the contains method located on each child (pass the value in)
    // return false if not found at all

    if (expectedValue === this.value) {
      return true;
    } else {
      for (const littleChildren of this.children) {
        if (littleChildren.contains(expectedValue) === true) {
          return true;
        }
      }
    }
    return false;
  }

  // applies the function to each child in the tree
  traverse(fn) {
    fn(this);
    for (const each of this.children) {
      each.traverse(fn);
    }
  }

  // OPTIONAL
  //return the node with that value if found. Returns null otherwise
  find(value) {}

  // OPTIONAL
  //adds a node with "value" as a child of the node with refValue
  //returns the new node added
  //or null if refValue was not found
  insertChildUnder(refValue, value) {}

  // OPTIONAL
  //adds a node with "value" between refValue and childValue (which has to be a child of refValu)
  //returns the new node added
  insertBetween(refValue, childValue, value) {}
}

module.exports = Tree;
