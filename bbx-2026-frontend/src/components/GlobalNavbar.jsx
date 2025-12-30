import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import lghsLogo from '../assets/lghs.png'

function GlobalNavBar(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
            <Navbar.Brand href='https://letsgohobbyshop.ca/' className='me-0'>
                <img 
                    src={lghsLogo}
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                    alt='LGHS'
                />
            </Navbar.Brand>
            <Navbar.Brand href='https://yomi-adt.github.io/' className='pe-2 border-end'>
                <div className='d-flex align-content-center'>
                    x Yomi
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#rankings">Rankings</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default GlobalNavBar