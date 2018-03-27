import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './header.scss';
const logo = require('./resources/logo-alb.png');

export const Navigation = () => {
    return (
        <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand" className="navbar-link">
                        <img src={logo} height="50px" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={2} href="#">
                        About
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        VPRR
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        Grapes MTB
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        Contact
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
