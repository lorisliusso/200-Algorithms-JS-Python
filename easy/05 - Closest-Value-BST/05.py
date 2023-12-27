def find_closest_value_in_bst(tree, target):
    return find_closest_value_in_bst_helper(tree, target, float("inf"))


def find_closest_value_in_bst_helper(tree, target, closest):
    if tree is None:
        return closest

    if abs(tree.value - target) < abs(closest - target):
        closest = tree.value

    if target < tree.value:
        return find_closest_value_in_bst_helper(tree.left, target, closest)
    elif target > tree.value:
        return find_closest_value_in_bst_helper(tree.right, target, closest)
    else:
        return closest


class Bst:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
