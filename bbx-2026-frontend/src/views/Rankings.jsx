import { useEffect, useState } from 'react'
import {Spinner, Table, Pagination} from 'react-bootstrap'
import {getPlayersSortedByRank} from '../api/playersAPI'


function Rankings() {
    const [currentRankings, setCurrentRankings] = useState([])

    useEffect(() => {
        setCurrentRankings(getPlayersSortedByRank())
        console.log(getPlayersSortedByRank())
    }, [])

    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 10;

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = currentRankings.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(currentRankings.length / itemsPerPage);

    return (
        <>
        <p>Rankings</p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>
                        Rank
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Points
                    </th>
                </tr>
            </thead>
            <tbody>
                {!currentItems ? 
                    (
                        <Spinner></Spinner>
                    )
                :
                    currentItems.map(currPlayer => (
                        <tr key={currPlayer.rank}>
                            <td>{currPlayer.rank}</td>
                            <td>{currPlayer.name}</td>
                            <td>{currPlayer.points}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>

        <Pagination>
            <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}
            />

            {[...Array(totalPages)].map((_, i) => (
                <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}
                >
                {i + 1}
                </Pagination.Item>
            ))}

            <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)}
            />
        </Pagination>
        </>
    )
}

export default Rankings