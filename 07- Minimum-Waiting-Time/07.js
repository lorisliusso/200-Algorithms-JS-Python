function minimumWaitingTime(queries) {
    if (queries.length === 0) return 0;
        
    const sortedQueries = queries.sort((a, b) => a - b);
    let [counter, index] = [0, 1];
  
    for (let i = 0; i < queries.length - 1; i++){
      counter += sortedQueries.slice(0, index).reduce((a, b) => a + b, 0);
      index += 1;
    }
    return counter;
  }