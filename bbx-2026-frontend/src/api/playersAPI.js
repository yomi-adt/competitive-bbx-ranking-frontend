const mockedPlayers = [
    {
        id: 1,
        name: "Blader Yomi",
        points: 100,
    },
    {
        id: 2,
        name: "Blader Jeromi",
        points: 200,
    },
    {
        id: 3,
        name: "Blader Ministromi",
        points: 300,
    },
]

// TODO: Use real API call when backend is implemented
export const getPlayers = () => {
    return mockedPlayers
}

export const getPlayersSortedByRank = () => {
    let sortedPlayers = getPlayers()
    sortedPlayers.sort((a,b) => b.points - a.points)
    // Add rank attribute to each player
    sortedPlayers.forEach((player, index) => {
        player.rank = index+1 // Indexed starts at 0
    })
    return sortedPlayers
}