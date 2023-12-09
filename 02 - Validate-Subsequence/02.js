function isValidSubsequence(array, sequence) {
    if (sequence.length > array.length) return false
    
    let seqIdx = 0;
  
    for (const n of array) {
      if (sequence[seqIdx] === n) {
        seqIdx++;
      }
      if (seqIdx === sequence.length) {
        return true
      }
    }
    return false
  }

console.log('Solution:', isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))