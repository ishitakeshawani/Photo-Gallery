import  React from "react";
import { Navbar,Nav, Container,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import {Link } from 'react-router-dom'

const NavBari = () => {
    return (
        <Navbar collapseOnselect fixed="Top" expand='xl' bg="#fff">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                         
                    </Nav>
                    <Nav className="justify-content-end">
                        <Button variant="outline-info"><Link to="/login">Sign In</Link></Button>&nbsp;
                        <Button variant="info"><Link to="/">Sign Up</Link></Button>
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBari;