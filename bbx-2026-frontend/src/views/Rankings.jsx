import { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {Spinner, Table, Pagination, InputGroup, Form} from 'react-bootstrap'
import {getPlayersSortedByRank} from '../api/playersAPI'
import { getLastUpdated } from '../api/generalAPI'


function Rankings() {
    const [currentRankings, setCurrentRankings] = useState([])

    useEffect(() => {
        setCurrentRankings(getPlayersSortedByRank())
    }, [])

    const [currentPage, setCurrentPage] = useState(1); 
    const [searchUsername, setSearchUserName] = useState("")
    const itemsPerPage = 10;

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const filtered = currentRankings.filter(item => searchUsername === "" || item.name.toLowerCase().startsWith(searchUsername.toLowerCase()));
    const currentItems = filtered.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    return (
        <>
        <InputGroup className='p-3'>
            <InputGroup.Text><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
            <Form.Control
            placeholder="Search by username"
            aria-label="Username"
            value={searchUsername}
            onChange={(e) => setSearchUserName(e.target.value)}
            />
        </InputGroup>
        <Table striped bordered>
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

        <i>Last Updated: {getLastUpdated()}</i>
        </>
    )
}

export default Rankings