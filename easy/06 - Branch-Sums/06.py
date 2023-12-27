class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    sums = []
    branch_sums_helper(root, sums, 0)
    return sums


def branch_sums_helper(root, sums, counter):
    if root is None:
        return
    else:
        counter += root.value
        if root.right is None and root.left is None:
            sums.append(counter)
            return
        branch_sums_helper(root.left, sums, counter)
        branch_sums_helper(root.right, sums, counter)
