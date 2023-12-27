function tournamentWinner(competitions, results) {
    const winners = {}
  
    for (i=0; i<results.length; i++) {
      const winner = results[i] === 0 ? competitions[i][1] : competitions[i][0]
      if (winners.hasOwnProperty(winner)) {
        winners[winner] += 3
      }
      else {
        winners[winner] = 3
      }
    }
  
      const finalWinner = Object.keys(winners).reduce((a, b) => 
        winners[a] > winners[b] ? a : b);
  
      return finalWinner
}

console.log('Solution:', tournamentWinner(
       [
            ["HTML", "C#"],
            ["C#", "Python"],
            ["Python", "HTML"],
          ],
          [0, 0, 1]
      ));