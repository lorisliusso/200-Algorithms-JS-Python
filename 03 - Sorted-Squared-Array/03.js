function sortedSquaredArray(array) {
    return array.map((n) => n**2).sort((n1,n2) => n1-n2)
  }

console.log('Solution:', sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))