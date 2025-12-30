import { Card, Row, Container, Col, Button } from "react-bootstrap"

function Home() {
    return (
        <>
        <h2 className="p-2">Who will be this Season's Rank 1?</h2>
        <Container>
            <Row>
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
                        <Button>Go!</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home