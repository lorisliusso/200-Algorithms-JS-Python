def nodeDepths(root):
    return calculate_node_depths(root, 0)


def calculate_node_depths(node, depth):
    if node is None:
        return 0

    return (
        depth
        + calculate_node_depths(node.left, depth + 1)
        + calculate_node_depths(node.right, depth + 1)
    )


class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
