class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

function branchSums(root){
    sums = []
    branchSumsHelper(root, sums, 0)
    return sums
}


function branchSumsHelper(root, sums, counter){
    if (root === null) return

    counter += root.value
    if (root.right === null && root.left === null) {
        sums.push(counter)
        return
    }
    branchSumsHelper(root.left, sums, counter)
    branchSumsHelper(root.right, sums, counter)
}
