import { Card, CardHeader, Row, Container, Col, Button, Spinner } from "react-bootstrap"
import { getTopNPlayers } from "../api/playersAPI"
import { useEffect, useState } from "react"

function Home() {
    const [currentTopThree, setCurrentTopThree] = useState()
    useEffect(() => {
        setCurrentTopThree(getTopNPlayers(3))
    }, [])

    return (
        <>
        <h2 className="p-2">Who will be this Season's Rank 1?</h2>
        <Container>
            <Row className="p-2">
                {!currentTopThree 
                ? (
                    <Spinner></Spinner>
                ) : (
                    <Col>
                        <Card className="p-0">
                        <CardHeader as="h4">First Place</CardHeader>
                        <Card.Body>
                            <Card.Title>{currentTopThree[0].name}</Card.Title>
                            <Card.Text>with {currentTopThree[0].points} points!</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
            <Row className="p-2">
                {!currentTopThree 
                ? (
                    <><Spinner></Spinner></>
                ): (
                    <>
                    <Col>
                        <Card className="p-0">
                        <CardHeader as="h4">Second Place</CardHeader>
                        <Card.Body>
                            <Card.Title>{currentTopThree[1].name}</Card.Title>
                            <Card.Text>with {currentTopThree[1].points} points!</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-0">
                        <CardHeader as="h4">Third Place</CardHeader>
                        <Card.Body>
                            <Card.Title>{currentTopThree[2].name}</Card.Title>
                            <Card.Text>with {currentTopThree[2].points} points!</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    </>
                )}
            </Row>
            <hr></hr>
            {/* <Row>
                <Col>
                    <Card className="p-0">
                        <Card.Header as="h5">
                            View Rankings
                        </Card.Header>
                        <Card.Body>
                            See current and Past Rankings
                        </Card.Body>
                        <Button href="#rankings">Go!</Button>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-0">
                        <Card.Header as="h5">
                            Start a Ranked Tournament
                        </Card.Header>
                        <Card.Body>
                            Organizing a Ranked Tourney? Click to go to the dashboard!
                        </Card.Body>
                        <Button href="#organizer">Go!</Button>
                    </Card>
                </Col>
            </Row> */}
        </Container>
        </>
    )
}

export default Home