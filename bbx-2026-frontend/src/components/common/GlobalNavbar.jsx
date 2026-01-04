import {Container, Row, Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styling/common/GlobalNavbar.module.css'

import lghsLogo from '../../assets/lghs.png'

function GlobalNavBar(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Row className='d-flex align-items-center me-2'>
                    <Col className='pe-0'>
                        <Navbar.Brand 
                            href='https://letsgohobbyshop.ca/'
                            className={styles.logo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={lghsLogo}
                                width="100"
                                height="50"
                                className="d-inline-block align-top"
                                alt='LGHS'
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col className='px-1 mx-1'>
                            <span>x</span>
                    </Col>
                    <Col className='ps-0'>
                        <Navbar.Brand 
                            href='https://yomi-adt.github.io/' 
                            className={styles.yomiLogo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>
                                yomi-adt
                            </span>
                        </Navbar.Brand>
                    </Col>
                </Row>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#rankings">Rankings</Nav.Link>
                        <Nav.Link href="#organizer">Organizers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default GlobalNavBar