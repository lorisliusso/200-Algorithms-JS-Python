class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
      currentNode = linkedList
      while (currentNode.next !== null){
          nextNode = currentNode.next
          if (currentNode.value == nextNode.value) {
              currentNode.next = nextNode.next
          }
          else {
              currentNode = nextNode
          }
      }
      return linkedList
}