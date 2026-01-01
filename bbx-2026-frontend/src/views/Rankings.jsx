import { useEffect, useState } from 'react'
import {getPlayersSortedByRank} from '../api/playersAPI'


function Rankings() {
    const [currentRankings, setCurrentRankings] = useState([])

    useEffect(() => {
        setCurrentRankings(getPlayersSortedByRank())
        console.log(getPlayersSortedByRank())
    }, [])

    return (
        <p>Rankings</p>
    )
}

export default Rankings