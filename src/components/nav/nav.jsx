import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faCookie, faTrafficLight, faGift, faUser, faWallet, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import './nav.css';

const Navigation = () => {
    return(
        <div className="nav">
            <div className="sidenav">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Main Menu</Nav.Link>
                    <Nav.Link eventKey="link-1"> <FontAwesomeIcon icon={faGripHorizontal} />Dashboard</Nav.Link>
                    <Nav.Link eventKey="link-2"> <FontAwesomeIcon icon={faCookie} />Catering Status</Nav.Link>
                    <Nav.Link eventKey="link-3"> <FontAwesomeIcon icon={faTrafficLight} />Guest Traffic</Nav.Link>
                    <Nav.Link eventKey="link-3"> <FontAwesomeIcon icon={faGift} />Gifts</Nav.Link>
                </Nav>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Settings</Nav.Link>
                    <Nav.Link eventKey="link-1"> <FontAwesomeIcon icon={faUser} />Account</Nav.Link>
                    <Nav.Link eventKey="link-2"> <FontAwesomeIcon icon={faWallet} />Wallet</Nav.Link>
                    <Nav.Link eventKey="link-3"> <FontAwesomeIcon icon={faQuestionCircle} />Help & Support</Nav.Link>
                </Nav>
            </div>
            <div className="topnav">
                <Navbar expand="lg">
                    <Container>
                    <Navbar.Brand>Vorgez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Navigation;