def tournament_winner(competitions, results):
    winners = {}

    for i in range(len(results)):
        winner = competitions[i][1] if results[i] == 0 else competitions[i][0]
        if winner in winners.keys():
            winners[winner] += 3
        else:
            winners[winner] = 3

    finalWinner = max(winners, key=lambda k: winners[k])

    return finalWinner


print(
    "Solution:",
    tournament_winner(
        [
            ["HTML", "C#"],
            ["C#", "Python"],
            ["Python", "HTML"],
        ],
        [0, 0, 1],
    ),
)
