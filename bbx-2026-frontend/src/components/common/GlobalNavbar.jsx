import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styling/common/GlobalNavbar.module.css'

import lghsLogo from '../../assets/lghs.png'

function GlobalNavBar(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
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
            <Navbar.Brand 
                href='https://yomi-adt.github.io/' 
                className={styles.yomiLogo}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className='d-flex align-content-center pe-2 border-end'>
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