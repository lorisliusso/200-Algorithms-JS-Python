function classPhotos(redShirtHeights, blueShirtHeights) {
    let r = redShirtHeights.slice(); // Create a copy to avoid mutating the original array
    let b = blueShirtHeights.slice(); // Create a copy to avoid mutating the original array
  
    r.sort((a, b) => a - b);
    b.sort((a, b) => a - b);
  
    let rCounter = 0;
    let bCounter = 0;
  
    for (let i = 0; i < r.length; i++) {
      if (r[i] === b[i]) return false
      if (r[i] > b[i]) {
        rCounter++;
      } else if (b[i] > r[i]) {
        bCounter++;
      }
    }
  
    return rCounter === r.length || bCounter === r.length;
  }