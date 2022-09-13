import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faCookie, faTrafficLight, faGift, faUser, faBars, faWallet, faQuestionCircle, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import './nav.css';

const Navigation = () => {
    return(
        <div className="nav">
            <FontAwesomeIcon icon={faBars} className="none"/>
            <div className="sidenav">
                <Nav defaultActiveKey="/home" className="flex-column">
                <Navbar.Brand>Vorgez</Navbar.Brand>
                    <Nav.Link href="#" className="link top-link">Main Menu</Nav.Link>
                    <Nav.Link eventKey="link-1" className="link"> <FontAwesomeIcon icon={faGripHorizontal} className="side-icon"/>Dashboard</Nav.Link>
                    <Nav.Link eventKey="link-2" className="link"> <FontAwesomeIcon icon={faCookie} className="side-icon"/>Catering Status</Nav.Link>
                    <Nav.Link eventKey="link-3" className="link"> <FontAwesomeIcon icon={faTrafficLight} className="side-icon"/>Guest Traffic</Nav.Link>
                    <Nav.Link eventKey="link-3" className="link"> <FontAwesomeIcon icon={faGift} className="side-icon"/>Gifts</Nav.Link>
                    <Nav.Link href="#" className="link top-link">Settings</Nav.Link>
                    <Nav.Link eventKey="link-1" className="link"> <FontAwesomeIcon icon={faUser} className="side-icon"/>Account</Nav.Link>
                    <Nav.Link eventKey="link-2" className="link"> <FontAwesomeIcon icon={faWallet} className="side-icon"/>Wallet</Nav.Link>
                    <Nav.Link eventKey="link-3" className="link"> <FontAwesomeIcon icon={faQuestionCircle} className="side-icon"/>Help & Support</Nav.Link>
                    <div className="flex">
                        <FontAwesomeIcon icon={faRightFromBracket} className="side-icon"/><p>Logout</p>
                    </div>
                </Nav>
            </div>
            <div className="topnav">
                <Navbar>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Overview</Nav.Link>
                            <Nav.Link href="#link">Guest List</Nav.Link>
                            <Nav.Link href="#link">Temporary Traffic</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Navigation;