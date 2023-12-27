function twoNumberSum(array, targetSum) {
    const out = []
    for (i=0; i<array.length; i++) {
      const num = array[i]
      const difference = targetSum - num;
      if (array.slice(i+1).includes(difference)) {
        out.push(difference, num)
      }
    }
    return out
  }

console.log('solution:', twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6] , targetSum = 10))