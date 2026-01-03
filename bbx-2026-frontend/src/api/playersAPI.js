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
    {
        id: 4,
        name: "Blader Yomi",
        points: 1020,
    },
    {
        id: 5,
        name: "Blader Jeromi",
        points: 23200,
    },
    {
        id: 6,
        name: "Blader Ministromi",
        points: 30013,
    },
    {
        id: 7,
        name: "Blader Ministromi",
        points: 30012343,
    },
    {
        id: 11,
        name: "Yomi",
        points: 100,
    },
    {
        id: 12,
        name: "Jeromi",
        points: 200,
    },
    {
        id: 13,
        name: "Ministromi",
        points: 300,
    },
    {
        id: 14,
        name: "Yomi",
        points: 1020,
    },
    {
        id: 15,
        name: "Jeromi",
        points: 23200,
    },
    {
        id: 16,
        name: "Ministromi",
        points: 30013,
    },
    {
        id: 17,
        name: "Ministromi",
        points: 30012343,
    },
]

// TODO: Use real API call when backend is implemented
export const getPlayers = () => {
    return mockedPlayers
}

function sortByPoints(playersToSort){
    const sortedPlayers = playersToSort.sort((a,b) => b.points - a.points)
    sortedPlayers
        .forEach((player, index) => {
            player.rank = index+1 // Indexed starts at 0
        })
    return sortedPlayers
}

export const getPlayersSortedByRank = () => {
    let playersToSort = getPlayers()
    return sortByPoints(playersToSort)
}

export const topNPlayers = (n) => {
    let playersToSort = getPlayers()
    return sortByPoints(playersToSort).slice(0, n-1)
}