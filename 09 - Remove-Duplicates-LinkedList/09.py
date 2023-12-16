class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def remove_duplicates_from_linked_list(linked_list):
    current_node = linked_list
    while current_node.next is not None:
        next_node = current_node.next
        if current_node.value == next_node.value:
            current_node.next = next_node.next
        else:
            current_node = next_node

    return linked_list
